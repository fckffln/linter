# fckffln / Linter

Frontend linter library for React/Angular projects

## Contents

- [Links](#links)
- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Links

- [Linter Angular library](projects/angular/README.md)
- [Linter React library](projects/react/README.md)

## Install

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
// if you use angular settings
const angular = module.require('@fckff/linter-ng/eslint').eslintConfig;
// if you use react settings
const react = module.require('@fckff/linter-rc/eslint').eslintConfig;
// set config
module.exports = angular('tsconfig.json');
```
3. Setting up ESLint in the IDE

### Prettier

1. Create a `.prettierrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// if you use angular library
const angular = module.require('@fckff/linter-ng/prettier').prettierConfig;
// if you use react library
const react = module.require('@fckff/linter-rc/prettier').prettierConfig;
// set config
module.exports = {
     ...angular,
}
```

### `License`

[LICENSE.md](LICENSE.md)

