---
Description: 
Affiliation: 
Location: 
Factions: 
Titles: 
Class:
  "{ level }": 
Race: 
State: 
Wealth: 
Birth: 
Death: 
Age:
  "{ age }": 
banner:
  "{ user.avatar }": 
banner_y:
  "{ user.avatar_align }": 
statblock: true
Name:
  "{ name }": 
Alignment:
  "{ alignment }": 
BAB:
  "{ bab }": 
AbilityScores:
  str:
    "{ abilities.str }"
  int:
    "{ abilities.int }" 
  dex:
    "{ abilities.dex }"
  wis:
    "{ abilities.wis }" 
  con:
    "{ abilities.con }"
  char:
    "{ abilities.cha }"
  tempStr: "{ abilities.tempStr }"
  tempInt: "{ abilities.tempInt }"
  tempDex: "{ abilities.tempDex }"
  tempWis: "{ abilities.tempWis }"
  tempCon: "{ abilities.tempCon }"
  tempCha: "{ abilities.tempCha }"
Icon:
  "{ user.token }":
AC:
  deflectionModifier: ""
  armorBonus: ""
  miscModifier: ""
  total: ""
  flatFooted: ""
  touch: ""
---

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
title: Skills

asdf
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
