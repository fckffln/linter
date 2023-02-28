# fckffln / Linter

Javascript/Typescript linter library

## Contents

- [Links](#links)
- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Links

- [Standard linter library](projects/typescript/README.md)
- [Linter Angular library](projects/angular/README.md)
- [Linter React library](projects/react/README.md)

## Install

### standard

Install via npm
```bash
npm install -D @fckff/linter
```

Install via pnpm 
```bash
pnpm add -D @fckff/linter
```

### angular

Install via npm
```bash
npm install -D @fckff/linter-ng
```

Install via pnpm 
```bash
pnpm add -D @fckff/linter-ng
```

### react

Install via npm
```bash
npm install -D @fckff/linter-rc
```
Install via pnpm
```bash
pnpm add -D @fckff/linter-rc
```

### `Usage`

### ESLint

1. Create a `.eslintrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// if you use standard library
const eslint = module.require('@fckff/linter/eslint');
// if you use angular settings
const angular = module.require('@fckff/linter-ng/eslint');
// if you use react settings
const react = module.require('@fckff/linter-rc/eslint');
// set config
module.exports = eslint();
```
3. Setting up ESLint in the IDE

### Prettier

1. Create a `.prettierrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// if you use standard library
const prettier = module.require('@fckff/linter/prettier');
// if you use angular library
const angular = module.require('@fckff/linter-ng/prettier');
// if you use react library
const react = module.require('@fckff/linter-rc/prettier');
// set config
module.exports = prettier;
```

### License

[LICENSE.md](LICENSE.md)


#### ❤ Thanks for [patron me](https://patreon.com/fckffln) ❤

