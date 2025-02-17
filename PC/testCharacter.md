---
Description:
 Hair: d
 Size: M
 Height: 1.52
 Weight: 44
 Eyes: f
 Gender: F
 Race: [race]
 Homeland: [[]]
Affiliation: 
Location: 
Factions: 
Titles: 
Class: {class:class,Level:1}
State: 
Wealth: 
Birth: 
Death: 
Age: 12 
banner: "https://static.wikia.nocookie.net/shrek/images/3/3f/Portada_img.jpg/revision/latest?cb=20100719002911&path-prefix=es"
banner_y: 0.332
portrait: "https://i.imgur.com/JokltCZ.png"
statblock: true
Name: testCharacter
Alignment: 
BAB: 13 
AbilityScores:
  str: 10
  int: 15
  dex: 20
  wis: 25
  con: 30
  char: 35
  tempStr: 0
  tempInt: 10
  tempDex: 0
  tempWis: 0
  tempCon: 0
  tempCha: 0
Icon: https://www.spriters-resource.com/resources/sheet_icons/8/8046.png?updated=1460948133
AC:
  deflectionModifier: ""
  armorBonus: ""
  miscModifier: ""
  total: ""
  flatFooted: ""
  touch: ""
HP: 
 total: 14
 wounds: 0
 nonLethal: 
Saves:
 Fortitude: 
 Will:
 Reflex:
Init: 
 total: 1
 miscMod: 2
---

>[!infobox]
># `=this.file.name` 
>![cover](`$= dv.current().file.frontmatter.portrait`)
>#### Geography
>Class | Level  |
> ---|---|

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

>[!infobox]
># Spells per day
Level | Spell Slots  | DC | 
---|---|---|
 0 | 1 | 10 |\n  1 | 2 | 9 |\n  2 | 4 | 8 |\n  3 | 4 | 7 |\n  4 | 5 | 6 |\n   | 6 | 5 |\n   | 7 | 4 |\n   | 8 | 3 |\n   | 9 | 2 |\n   | 10 | 1 |\n 
>
>#### Spells Known - Prepared

```dataviewjs
	dv.paragraph('>[!infobox]\n' + 
	'># Spells per day\n' +
	'Level | Spell Slots  | DC |\n' +
	'---|---|---|\n'+
	'   1 | 2 | 9 |\n   2 | 3 | 8 |\n   3 | 4 | 7 |\n   4 | 5 | 6 |\n      '
	);
```





## Skills


---