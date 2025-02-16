---
Description: 
Affiliation: 
Location: 
Factions: 
Titles: 
Class: Paladin Lvl 10
Race: 
State: Alive
Wealth: 
Birth: 
Death: 
Age: 21
banner: "https:/i.imgur.com/99imyQ0.png"
banner_y: 0.324
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
  tempStr: 0
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
    - +2 When cast Smite Evil
    - +6 Ironskin
    - +2 Behind
  total: 24
  flatFooted: 23
  touch: 17
slider1: 100
---

##  `VIEW[{TextA}]`

banner: `INPUT[text(defaultValue(null)):banner]`

```meta-bind-js-view
{banner} as banner
{AC} as ac
{AbilityScores} as as
---
const bannerValue = context.bound.banner;
const ac = context.bound.ac;
const as = context.bound.as;
context.bound.ac.total = 10 + Math.trunc((as.dex - 10)/2) + ac.deflectionModifier + ac.armorBonus;
let total = 10 + Math.trunc((as.dex-10)/2) + ac.deflectionModifier + ac.armorBonus;
let belowLimit = (total - 10);
let aboveLimit = (total + 10)
const banner_str = `AC: \`INPUT[slider(minValue(${belowLimit}), maxValue(${aboveLimit}), defaultValue(${total}), stepSize(1), showcase):AC.total]\``;
return engine.markdown.create(banner_str);
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
	const abilityScoresObject = {
		str: (abilityScores.tmpStr > 0) ? abilityScores.tmpStr > 0 : abilityScores.str,
		  int: (abilityScores.tmpStr > 0) ? abilityScores.tmpStr > 0 : abilityScores.str,
		  dex: (abilityScores.tmpStr > 0) ? abilityScores.tmpStr > 0 : abilityScores.str,
		  wis: (abilityScores.tmpStr > 0) ? abilityScores.tmpStr > 0 : abilityScores.str, 
		  con: (abilityScores.tmpStr > 0) ? abilityScores.tmpStr > 0 : abilityScores.str, 
		  char: 20 
	}
	let asString = '[';
	for(const [key, value] of Object.entries(abilityScores)) {
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


___
## Inventory

---
## Backstory


___
## Relations


---
