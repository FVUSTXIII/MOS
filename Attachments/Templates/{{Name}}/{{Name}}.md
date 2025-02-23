---
Description:
 Hair: {{hair}}
 Size: {{size}}
 Height: {{height}}
 Weight: {{weight}}
 Eyes: {{eyes}}
 Gender: {{gender}}
 Race: {{race.name}} 
 Homeland: [[{{Homeland}}]]
Affiliation: 
Location: 
Factions: 
Titles: 
Class: {{makeClassLevel level}}
State: 
Wealth: 
Birth: 
Death: 
Age: {{age}} 
banner: {{user.avatar}} 
banner_y: {{user.avatar_align}}
portrait: {{user.portrait}}
statblock: true
Name: {{name}}
Alignment: {{alignment}}
BAB: {{bab}} 
AbilityScores:
  str: {{abilities.str}}
  int: {{abilities.int}}
  dex: {{abilities.dex}}
  wis: {{abilities.wis}}
  con: {{abilities.con}}
  char: {{abilities.cha}}
  tempStr: {{normalizeAbilityScores abilities.str abilities.tempStr}}
  tempInt: {{normalizeAbilityScores abilities.int abilities.tempInt}}
  tempDex: {{normalizeAbilityScores abilities.dex abilities.tempDex}}
  tempWis: {{normalizeAbilityScores abilities.wis abilities.tempWis}}
  tempCon: {{normalizeAbilityScores abilities.con abilities.tempCon}}
  tempCha: {{normalizeAbilityScores abilities.cha abilities.tempCha}}
Icon: {{user.token}}
AC:
  deflectionModifier: {{ac.deflectionModifier}}
  armorBonus: {{ac.armorBonus}}
  miscModifier: {{parseList ac.miscModifier}}
  total: {{ac.total}}
  flatFooted: {{ac.flatFooted}}
  touch: {{ac.touch}}
HP: 
 total: {{hp.total}}
 wounds: {{hp.wounds}}
 nonLethal: {{hp.nonLethal}}
Saves:
 Fortitude: { base: {{saves.fort.base}}, miscModifier: {{saves.fort.miscModifier}}, tempModifier: {{saves.fort.tempModifier}}, otherModifiers: {{parseList saves.fort.otherModifiers}}, total: {{saves.fort.total}} }
 Will: { base: {{saves.will.base}}, miscModifier: {{saves.will.miscModifier}}, tempModifier: {{saves.will.tempModifier}}, otherModifiers: {{parseList saves.will.otherModifiers}}, total: {{saves.will.total}} }
 Reflex: { base: {{saves.reflex.base}}, miscModifier: {{saves.reflex.miscModifier}}, tempModifier: {{saves.reflex.tempModifier}}, otherModifiers: {{parseList saves.reflex.otherModifiers}}, total: {{saves.reflex.total}} }
Init: 
 total: {{initiative.total}}
 miscMod: {{initiative.miscModifier}}
CMB: { miscMods: {{cmb.miscModifiers}}, tempMods: {{parseList cmb.tempModifiers}}, sizeMods: {{cmb.sizeModifiers }} , total: {{cmb.total}} } 
CMD: { miscMods: {{cmd.miscModifiers}}, tempMods: {{parseList cmd.tempModifiers}}, sizeMods: {{cmd.sizeModifiers }} , total: {{cmd.total}} }
---

>[!infobox]
># `=this.file.name` 
>![cover hsmall]({{user.portrait}})
> --- 
>Class | Level  | Race |
> ---|---|---|
> `=this.Class.class`|`=this.Class.Level`| [`=this.Description.Race`]({{race.url}})

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

let willCastWith = ''

for (const [key, value] of abilityScoreToCast) {
if (value.includes(_class)) {
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


dv.paragraph('>[!infobox]\n' + 
	'># Spells per day\n' +
	'Level | Spell Slots | Bonus Spells | DC |\n' +
	'---|---|---|---|\n'+
	'{{#each spells}} {{#if this.slotted.[0].level}} {{ this.slotted.[0].level  }} | {{this.totalPerDay}} |'  + bonSpells[`LVL${ {{this.slotted.[0].level}} }`] + '| {{this.dc}} |\n {{/if}}{{/each}}'
);
```




## Skills


---