---
Description:
  Hair: White/Blonde
  Size: Normal
  Height: 1.7
  Weight: 163
  Eyes: Yellow
  Gender: Female
  Race: Human
  Homeland:
Affiliation: 
Location: 
Factions: 
Titles: 
Class:
  class: Paladin
  Level: 11
State: 
Wealth: 
Birth: 
Death: 
Age: 24
banner: "https://i.imgur.com/99imyQ0.png"
banner_y: 0.332
portrait: https://i.imgur.com/vEyXUGg.png
statblock: true
Name: Ashe Lightborn
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
  miscModifier:
    - +7 Smite Evil
    - +6Ironskin
    - +2Behind
  total: 24
  flatFooted: 23
  touch: 17
HP:
  total: 123
  wounds: 123
  nonLethal: 39
Saves:
  Fortitude:
    base: 7
    miscModifier: 5
    tempModifier: 4
    otherModifiers: []
    total: 19
  Will:
    base: 7
    miscModifier: 5
    tempModifier: 4
    otherModifiers:
      - fear and charm allies 10ft +4
    total: 19
  Reflex:
    base: 3
    miscModifier: 5
    tempModifier: 4
    otherModifiers: []
    total: 15
Init:
  total: 
  miscMod:
---

>[!infobox]
># `=this.file.name` 
>![cover hsmall](https://i.imgur.com/vEyXUGg.png)
> --- 
>Class | Level  | Race |
> ---|---|---|
> `=this.Class.class`|`=this.Class.Level`| [`=this.Description.Race`](obsidian://adv-uri?vault=Game%20Systems&filepath=Pathfinder%201e%2FCore%20Rule%20Book%2FChapter%201%20-%20Getting%20Started%2F6%20Races%2FHumans.md)
> ---
> ## Other Shit
>  AC | Hometown | Field
>  ---|---|---|
>  1|2|3

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
---
```ad-Tr
traits
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
		  str: (abilityScores.tempStr > 0) ? abilityScores.tempStr : abilityScores.str,
		  int: (abilityScores.tempInt > 0) ? abilityScores.tempInt : abilityScores.int,
		  dex: (abilityScores.tempDex > 0) ? abilityScores.tempDex : abilityScores.dex,
		  wis: (abilityScores.tempWis > 0) ? abilityScores.tempWis : abilityScores.wis, 
		  con: (abilityScores.tempCon > 0) ? abilityScores.tempCon : abilityScores.con, 
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
	'   1 | 4 | 16 |\n   2 | 2 | 17 |\n   3 | 2 | 18 |\n       '
	);
```





## Skills


---