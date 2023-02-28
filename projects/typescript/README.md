# @fckff / Standard Linter

Standard linter library for your projects

## Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

Install via npm
```bash
npm install -D @fckff/linter
```

Install via pnpm
```bash
pnpm add -D @fckff/linter
```

## Usage

### ESLint

1. Create a `.eslintrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// import settings
const eslint = module.require('@fckff/linter/eslint');
// set config
module.exports = eslint();
```
3. Setting up ESLint in the IDE

### Prettier

1. Create a `.prettierrc.cjs` file in the root directory of the project
2. Importing files from libraries
```js
// import settings
const prettier = module.require('@fckff/linter/prettier');
// set config
module.exports = prettier;
```

## License

[LICENSE.md](LICENSE.md)

#### ❤ Thanks for [patron me](https://patreon.com/fckffln) ❤
