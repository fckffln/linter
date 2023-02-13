# @fckff / Linter-RC

React linter library for your projects

## Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

Install via npm
```bash
npm install -D @fckff/linter-rc
```

Install via pnpm
```bash
pnpm add -D @fckff/linter-rc
```

## Usage

### ESLint

1. Create a `.eslintrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// import settings
const react = module.require('@fckff/linter-rc/eslint').eslintConfig;
// set config
module.exports = react('tsconfig.json');
```
3. Setting up ESLint in the IDE

### Prettier

1. Create a `.prettierrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// import settings
const react = module.require('@fckff/linter-rc/prettier').prettierConfig;
// set config
module.exports = {
     ...react,
}
```

## License

[LICENSE.md](LICENSE.md)

