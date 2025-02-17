---
Description:
 Hair: {{hair}}
 Size: {{size}}
 Height: {{height}}
 Weight: {{weight}}
 Eyes: {{eyes}}
 Gender: {{gender}}
 Race: [{{race}}]
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
  deflectionModifier: ""
  armorBonus: ""
  miscModifier: ""
  total: ""
  flatFooted: ""
  touch: ""
HP: 
 total: {{hp.total}}
 wounds: {{hp.wounds}}
 nonLethal: {{nonLethal}}
Saves:
 Fortitude: { base: {{}}, miscModifier: {{}}, tempModifier: {{}}, otherModifiers: {{}}, total: {{}} }
 Will:
 Reflex:
 total: 
Init: 
 total: {{initiative.total}}
 miscMod: {{initiative.miscModifier}}
---

>[!infobox]
># `=this.file.name` 
>![cover hsmall]({{user.portrait}})
>#### Geography
>Class | Level  |
> ---|---|
> `=this.Class.class`|`=this.Class.Level`

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
	+ ' portrait: ' + frontmatter.Icon +'\n'
	+ ' ability_scores: '+ asString + '\n'
	+ '```');
	```
## Backstory

## Spells

```dataviewjs
	dv.paragraph('>[!infobox]\n' + 
	'># Spells per day\n' +
	'Level | Spell Slots  | DC |\n' +
	'---|---|---|\n'+
	'{{#each spells}} {{#if this.slotted.[0].level}} {{ this.slotted.[0].level  }} | {{this.totalPerDay}} | {{this.dc}} |\n {{/if}}{{/each}}'
	);
```





## Skills


---