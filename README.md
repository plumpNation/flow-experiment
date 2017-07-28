Flow experiment
===============

In this experiment I am only using flow-remove-types. This is because node 8 supports enough
syntactic sugar to be able to write very readable js, with great support for most things.

It is at this time still not supporting the object spread operator, however, Object.assign is good
enough for the time being.

---

## Remove flow types
Use the pretty option. Otherwise the code is filled with shitespace everywhere. Not sure why that
is the default but hey, it's free.

```
// in package.json
"scripts": {
    ...
    "build": "flow-remove-types --pretty src/ --out-dir build/",
    ...
}
```

---

## First impressions
Much faster to get up and running than in typescript. However, since I am thinking of using it
for a node project, and my only experience with typescript is wedging it into a legacy frontend
project this is likely an unfair comparison.

---
