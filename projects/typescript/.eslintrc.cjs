/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

// require is only supported in cjs
const eslint = require('./src/eslint');
module.exports = eslint();

// External usage example
// const eslint = module.require('@fckff/linter/eslint');
// module.exports = eslint();

