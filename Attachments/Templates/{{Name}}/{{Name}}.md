---
Description: 
Affiliation: 
Location: 
Factions: 
Titles: 
Class: {{level}}
Race: 
State: 
Wealth: 
Birth: 
Death: 
Age: {{age}}
banner: {{user.avatar}}
banner_y: {{user.avatar_align}}
statblock: true
Name: {{name}}
Alignment: {{alignment}}
BAB: {{bab}}
AbilityScores: { str: {{abilities.str}}, int: {{abilities.int}}, dex: {{abilities.dex}}, con: {{abilities.con }}, char: {{abilities.cha}} }
Icon: {{user.token}}
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

--- 
## Statblocks

```statblock
layout: PF1stedCS
name: `=this.file.name`
portrait: 
ability_scores: [0,0,0,0,0,0]
```

```dataviewjs
	const frontmatter = dv.current().file.frontmatter;
	dv.paragraph('```statblock \n' 
	+ ' layout: PF1stedCS \n' 
	+ ' name: ' + frontmatter.Name + '\n'
	+ ' portrait: ' + frontmatter.Icon +'\n'
	+ ' ability_scores: [0,0,0,0,0,0]' 
	+ '```');
```


___
## Inventory

---
## Backstory


___
## Relations


---
