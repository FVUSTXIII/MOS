/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

const PROD = true;

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ChecklistProgressPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// src/utils.ts
var LOG_DEBUG = 0;
var LOG_INFO = 1;
var LOG_PREFIX = "cl-progress";
var LOG_LEVEL = PROD ? LOG_INFO : LOG_DEBUG;
function debug(msg, ...args) {
  if (LOG_LEVEL <= LOG_DEBUG) console.debug(`${LOG_PREFIX}: ${msg}`, ...args);
}
function info(msg, ...args) {
  if (LOG_LEVEL <= LOG_INFO) console.info(`${LOG_PREFIX}: ${msg}`, ...args);
}

// src/settings.ts
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  autoUpdateProgress: false
};
var ChecklistProgressSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Auto-update progress").setDesc("Automatically updates checklist progress                      in editor live preview on every checkbox click.").addToggle((toggle) => toggle.setValue(this.plugin.settings.autoUpdateProgress).onChange(async (value) => {
      debug("auto-update setting", value);
      this.plugin.settings.autoUpdateProgress = value;
      await this.plugin.saveSettings();
    }));
  }
};

// src/extension.ts
var import_view = require("@codemirror/view");

// src/update-progress.ts
function update_progress_default(lines) {
  if (lines.length < 2) return [];
  const changes = [];
  const stack = [];
  const popReplace = () => {
    const p = stack.pop();
    if (!p || !p.type || p.count === 0) return p;
    const num = p.rev ? p.count - p.checked : p.checked;
    let replacement = p.type === "perc" ? `${(num / p.count * 100).toFixed(0)}%` : `${num}/${p.count}`;
    if (p.rev)
      replacement = "-" + replacement;
    replacement = "(" + replacement + ")";
    if (p.idx === void 0 || p.toReplace === void 0)
      throw "line position should be set if type is set";
    changes.push({
      idx: p.idx,
      toReplace: p.toReplace,
      replacement
    });
    return p;
  };
  const increment = (checked) => {
    stack[stack.length - 1].count++;
    if (checked)
      stack[stack.length - 1].checked++;
  };
  let alreadyPushed = false;
  lines.forEach(({ txt: line, idx, checked: isLPChecked }) => {
    var _a;
    if (line.length == 0) {
      debug("empty line");
      while (popReplace()) ;
      return;
    }
    let m = null;
    let indent = 0;
    if (m = line.match(/^(\s*)[*+-] \[([-x ])\] .+/)) {
      indent = m[1].length;
      const checked = isLPChecked === void 0 ? m[2] === "x" || m[2] === "-" : isLPChecked;
      debug(`list item (s=${stack.length}, i=${indent}, c=${checked})`, line);
      if (stack.length > 0) {
        if (stack[stack.length - 1].indent > indent) {
          while (((_a = popReplace()) == null ? void 0 : _a.indent) > indent + 4) ;
          increment(checked);
        } else if (stack[stack.length - 1].indent < indent) {
          if (alreadyPushed) {
            increment(checked);
          } else {
            stack.push({ indent, count: 1, checked: checked ? 1 : 0 });
          }
        } else {
          increment(checked);
        }
      } else {
        stack.push({ indent, count: 1, checked: checked ? 1 : 0 });
      }
    }
    alreadyPushed = false;
    let ty = null;
    if (m = line.match(/\((-)?[0-9]*%\)/)) {
      ty = "perc";
    } else if (m = line.match(/\((-)?[0-9]*\/[0-9]*\)/)) {
      ty = "frac";
    }
    if (ty) {
      debug(`tracking next checklist '${ty}'`);
      if (m === null)
        throw "this should not happen...";
      stack.push({
        indent: stack.length == 0 ? 0 : indent + 4,
        idx,
        type: ty,
        rev: m.length > 1 && !!m[1],
        count: 0,
        checked: 0,
        toReplace: m[0]
      });
      alreadyPushed = true;
    }
  });
  while (popReplace()) ;
  return changes;
}

// src/extension.ts
function extension_default() {
  return import_view.ViewPlugin.fromClass(Extension);
}
var Extension = class {
  constructor(view) {
    this.view = view;
    this.handleClickEvent = this.handleClickEvent.bind(this);
    this.view.dom.addEventListener("click", this.handleClickEvent);
  }
  destroy() {
    this.view.dom.removeEventListener("click", this.handleClickEvent);
  }
  handleClickEvent(evt) {
    const { target } = evt;
    if (!target || !(target instanceof HTMLInputElement) || target.type !== "checkbox") {
      return false;
    }
    const { state } = this.view;
    const position = this.view.posAtDOM(target);
    const targetLine = state.doc.lineAt(position);
    let idx = 0;
    const lines = [];
    for (const line of state.doc.iterLines()) {
      lines.push({
        txt: line,
        idx,
        checked: targetLine.text == line ? target.checked : void 0
      });
      idx++;
    }
    const cs = update_progress_default(lines);
    const tr = state.update({
      changes: cs.map((c) => {
        const oldLine = state.doc.line(c.idx + 1);
        const r = oldLine.text.replace(c.toReplace, c.replacement);
        return { from: oldLine.from, to: oldLine.to, insert: r };
      })
    });
    this.view.dispatch(tr);
    return true;
  }
};

// src/main.ts
var ChecklistProgressPlugin = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.extensions = [];
  }
  async onload() {
    info("loading plugin");
    await this.loadSettings();
    this.addSettingTab(new ChecklistProgressSettingsTab(this.app, this));
    this.addCommand({
      id: "update",
      name: "update",
      editorCallback(ed) {
        let idx = 0;
        const lines = [];
        for (const line of ed.getValue().split(/\r?\n/)) {
          lines.push({ txt: line, idx });
          idx++;
        }
        for (const c of update_progress_default(lines)) {
          const oldLine = ed.getLine(c.idx);
          const r = oldLine.replace(c.toReplace, c.replacement);
          ed.replaceRange(
            r,
            { line: c.idx, ch: 0 },
            { line: c.idx, ch: oldLine.length }
          );
        }
      }
    });
    if (this.settings.autoUpdateProgress) {
      this.extensions = [extension_default()];
    }
    this.registerEditorExtension(this.extensions);
  }
  async onunload() {
    info("unloading plugin");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
    if (this.settings.autoUpdateProgress && this.extensions.length == 0) {
      this.extensions.push(extension_default());
      this.app.workspace.updateOptions();
    } else if (!this.settings.autoUpdateProgress && this.extensions.length > 0) {
      this.extensions.pop();
      this.app.workspace.updateOptions();
    }
  }
};

/* nosourcemap */