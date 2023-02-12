/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

// require is only supported in cjs
const eslint = require('./src/eslint').eslintConfig;
module.exports = eslint('tsconfig.lib.json');

// External usage example
// const eslint = module.require('@fckff/linter-rc/eslint').eslintConfig;
// module.exports = eslint('tsconfig.json');

