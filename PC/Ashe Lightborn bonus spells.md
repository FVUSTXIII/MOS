---
Description:
 Hair: White/Blonde
 Size: Normal
 Height: 1.70
 Weight: 163
 Eyes: White/Blonde
 Gender: Female
 Race: Human 
 Homeland: [[]]
Affiliation: 
Location: 
Factions: 
Titles: 
Class: { class: Paladin,Level: 11 }
State: 
Wealth: 
Birth: 
Death: 
Age: 24 
banner: "https://i.imgur.com/99imyQ0.png"
banner_y: 0.332
portrait: https://i.imgur.com/vEyXUGg.png
statblock: true
Name: Ashe Lightborn bonus spells
Alignment: Lawful Good
BAB: 11/6/1 
AbilityScores:
  str: 10
  int: 8
  dex: 17
  wis: 12
  con: 16
  char: 20
  tempStr: 14
  tempInt: 0
  tempDex: 0
  tempWis: 0
  tempCon: 0
  tempCha: 0
Icon: https://i.imgur.com/VSJSnnR.png
AC:
  deflectionModifier: 4
  armorBonus: 7
  miscModifier: [+7 Smite Evil, +6 Ironskin, +2 Behind (Homebrew)]
  total: 24
  flatFooted: 23
  touch: 17
HP: 
 total: 123
 wounds: 0
 nonLethal: 0
Saves:
 Fortitude: { base: 7, miscModifier: 5, tempModifier: 4, otherModifiers: [], total: 19 }
 Will: { base: 7, miscModifier: 5, tempModifier: 4, otherModifiers: [fear and charm allies 10ft +4], total: 19 }
 Reflex: { base: 3, miscModifier: 5, tempModifier: 4, otherModifiers: [], total: 15 }
Init: 
 total: 3
 miscMod: 0
CMB: { miscMods: , tempMods: [], sizeMods:  , total: 13 } 
CMD: { miscMods: 0, tempMods: [0], sizeMods:  , total: 26 }
SpellsCast: []
---

>[!infobox]
># `=this.file.name` 
>![cover hsmall](https://i.imgur.com/vEyXUGg.png)
> --- 
>Class | Level  | Race |
> ---|---|---|
> `=this.Class.class`|`=this.Class.Level`| [`=this.Description.Race`](obsidian://adv-uri?vault=Game%20Systems&filepath=Pathfinder%201e%2FCore%20Rule%20Book%2FChapter%201%20-%20Getting%20Started%2F6%20Races%2FHumans.md)

```ad-Tr
traits
```

```ad-fw
flaws
```

```ad-Bd
bonds
```

```ad-idl
ideals
```

```ad-goals
goals
```

```ad-ft
title: Feats
asdf

```

```ad-sk
title:Special Abilities

asdf
```
## Affiliations

## Inventory

## Statblocks
```dataviewjs
	const frontmatter = dv.current().file.frontmatter;
	const abilityScores = frontmatter.AbilityScores;
	const abilityScoresObject = {
		  str: (abilityScores.tempStr > 0) ? abilityScores.tempStr  : abilityScores.str,
		  int: (abilityScores.tempInt > 0) ? abilityScores.tempInt  : abilityScores.int,
		  dex: (abilityScores.tempDex > 0) ? abilityScores.tempDex  : abilityScores.dex,
		  wis: (abilityScores.tempWis > 0) ? abilityScores.tempWis  : abilityScores.wis, 
		  con: (abilityScores.tempCon > 0) ? abilityScores.tempCon  : abilityScores.con, 
		  char:(abilityScores.tempCha > 0) ? abilityScores.tempCha : abilityScores.char 
	}
	const extraTemplateInfo = {
    hp: (frontmatter.HP.total - frontmatter.HP.wounds),
    ac: (frontmatter.AC.total),
    init: (frontmatter.Init.total - frontmatter.Init.miscMod),
    bab: frontmatter.BAB,
    cmb: frontmatter.CMB.total,
    cmd: frontmatter.CMD.total,
    saves: { 
	    fortitude: frontmatter.Saves.Fortitude.total ,
        will: frontmatter.Saves.Will.total,
        reflex: frontmatter.Saves.Reflex.total 
	}
  }
	let asString = '[';
	for(const [key, value] of Object.entries(abilityScoresObject)) {
	  if (!key.includes('temp')) {
		  if (key !== 'char') {
				asString += value + ','
			} else {
				asString += value + ']'
			}
	  }	
	}
	dv.paragraph('```statblock \n' 
	+ ' layout: PF1stedCS \n' 
	+ ' name: ' + frontmatter.Name + '\n'
	+ ' HP: '+ extraTemplateInfo.hp + '\n'
	+ ' ac: '+ extraTemplateInfo.ac + '\n'
	+ ' portrait: ' + frontmatter.Icon + '\n'
	+ ' init: ' + extraTemplateInfo.init + '\n'
	+ ' cmb: ' + extraTemplateInfo.cmb + '\n'
	+ ' cmd: ' + extraTemplateInfo.cmd + '\n'
	+ ' ability_scores: '+ asString + '\n'
	+ ' bab: ' + extraTemplateInfo.bab+ '\n'
	+ ' saves: \n - Fortitude: ' + extraTemplateInfo.saves.fortitude 
	+ '\n - Will: ' + extraTemplateInfo.saves.will + '\n - Reflex: ' + extraTemplateInfo.saves.reflex + '\n'
	+ '```');
```
## Backstory

## Spells

```dataviewjs
const frontmatter = dv.current().file.frontmatter;

const abilityScores = frontmatter.AbilityScores;

const abilityScoresObject = {
	  str: (abilityScores.tempStr > 0) ? abilityScores.tempStr  : abilityScores.str,
	  int: (abilityScores.tempInt > 0) ? abilityScores.tempInt  : abilityScores.int,
	  dex: (abilityScores.tempDex > 0) ? abilityScores.tempDex  : abilityScores.dex,
	  wis: (abilityScores.tempWis > 0) ? abilityScores.tempWis  : abilityScores.wis, 
	  con: (abilityScores.tempCon > 0) ? abilityScores.tempCon  : abilityScores.con, 
	  char:(abilityScores.tempCha > 0) ? abilityScores.tempCha : abilityScores.char 
}

const abilityScoreToCast = new Map([
	["char", ["sorcerer", "paladin", "bard", "oracle", "summoner", "medium", "spiritualist", "mesmerist"]],
	["int", ["wizard", "psion", "witch", "magus", "psychic", "occultist"]],
	["wis", ["cleric", "druid", "ranger", "inquisitor", "chaman"]]
]);

const _class = frontmatter.Class.class;

let spellsCast = frontmatter.SpellsCast.length;

let willCastWith = ''

for (const [key, value] of abilityScoreToCast) {
if (value.includes(_class.toLowerCase())) {
      willCastWith = key;
  }
}

function bonSpellMod(abilityScore) {
    return Math.floor((abilityScore - 10) / 2);
}

function bonSpell(spellLevel, abilityScore) {
	return (bonSpellMod(abilityScore) <= 0 || spellLevel < 1) ? 0 : Math.floor((bonSpellMod(abilityScore) - (spellLevel)) / 4) + 1;
}

function calculateBonSpells (abilityScore, spellLevel) {
    
    let bonusSpells = {}
    
    for (let spellLevel = 1; spellLevel <= 9; spellLevel++) {
        let bonusSpell = bonSpell(spellLevel, abilityScore);
        bonusSpells[`LVL${spellLevel}`] = (bonusSpell > 0) ? bonusSpell : 0
    }
    return bonusSpells
}

let bonSpells = calculateBonSpells(abilityScores[willCastWith]);

function bonSpellsSlotsOptionBuilder(bonSpell) {
	let bonspellsStr = '';
	if (bonSpell < 2) {
		for (i = 0; i < bonSpell; i++) {
			bonspellsStr += 'option("bonus spell slot"), '
		}
	}
	bonspellsStr += 'option("bonus spell slot")'
	return bonspellsStr;
}

dv.paragraph('>[!infobox]\n' + 
	'># Spells per day\n' +
	'Level | Spell Slots | Bonus Spells | DC |\n' +
	'---|---|---|---|\n'+
	'   1 | 2 |'  + bonSpells[`LVL${ 1 }`] + '| 16 |\n   2 | 1 |'  + bonSpells[`LVL${ 2 }`] + '| 17 |\n   3 | 1 |'  + bonSpells[`LVL${ 3 }`] + '| 18 |\n       '
);

let str1 = '`VIEW[' + spellsCast + '][text(renderMarkdown)]`\n'

let str = bonSpellsSlotsOptionBuilder(bonSpells['LVL2']);

dv.paragraph(str);
```




## Skills


---