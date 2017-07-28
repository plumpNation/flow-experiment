Flow experiment
===============

In this experiment I am only using flow-remove-types. This is because node 8 supports enough
syntactic sugar to be able to write very readable js, with great support for most things.

It is at this time still not supporting the object spread operator, however, Object.assign is good
enough for the time being.

---

## Setup

```
yarn global add flow-bin
yarn install
```

Setup the `linter-flow` in atom or similar.

```
yarn watch
```

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
Much faster to get up and running than in typescript. I absolutely love the fact that you only
are **required** to annotate the boundaries of the modules at first. This makes easing typing into
your project way easier and quicker, and you can build up your annotations as you need to.

---
