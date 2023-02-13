# @fckff / Linter-NG

Angular linter library for your projects

## Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

Install via npm
```bash
npm install -D @fckff/linter-ng
```
Install via pnpm
```bash
pnpm add -D @fckff/linter-ng
```

## Usage

### ESLint

1. Create a `.eslintrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// import settings
const angular = module.require('@fckff/linter-ng/eslint').eslintConfig;
// set config
module.exports = angular('tsconfig.json');
```
3. Setting up ESLint in the IDE

### Prettier

1. Create a `.prettierrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// import settings
const angular = module.require('@fckff/linter-ng/prettier').prettierConfig;
// set config
module.exports = {
     ...angular,
}
```

### `deprecated` TSLint

1. Create a `tslint.json` file in the root directory of the project
2. Importing files from libraries
```json
{
  "extends": "@fckff/linter-ng/tslint.json"
}
```
3. Setting up TSLint in the IDE

## License

[LICENSE.md](LICENSE.md)

