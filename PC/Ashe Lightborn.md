---
Description: 
Affiliation: 
Location: 
Factions: 
Titles: 
Class: Paladin Lvl 10
Race: 
State: 
Wealth: 
Birth: 
Death: 
Age: 21
banner: https://i.imgur.com/99imyQ0.png
banner_y: 0.332
statblock: true
Name: Ashe Lightborn
Alignment: Lawful Good
BAB: 11/6+1
AbilityScores:
  str: 10
  int: 8
  dex: 17
  wis: 12
  con: 16
  char: 20
Icon: https://i.imgur.com/VSJSnnR.png
TextA: Jorgitob
---

##  `VIEW[{TextA}]`

```meta-bind
INPUT[text(defaultValue('a')):TextA]
```




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

--- 
## Statblocks

```dataviewjs
	const frontmatter = dv.current().file.frontmatter;
	const abilityScores = frontmatter.AbilityScores;
	let asString = '[';
	for(const [key, value] of Object.entries(abilityScores)) {
		if (key !== 'char') {
			asString += value + ','
		} else {
			asString += value + ']'
		}
	}
	dv.paragraph('```statblock \n' 
	+ ' layout: PF1stedCS \n' 
	+ ' name: ' + frontmatter.Name + '\n'
	+ ' portrait: ' + frontmatter.Icon +'\n'
	+ ' ability_scores: '+ asString + '\n'
	+ '```');
```


___
## Inventory

---
## Backstory


___
## Relations


---
