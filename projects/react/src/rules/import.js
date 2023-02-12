/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

module.exports = {
    rules: {
        'import/named': 0,
        'import/no-unresolved': 0,
        'import/export': 0,
        'import/order': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'import/newline-after-import': 1,
        'import/extensions': 0,
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/no-cycle': 0,
        'import/dynamic-import-chunkname': 0,
        'import/no-anonymous-default-export': [
            'error',
            {
                allowArray: true,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowCallExpression: true,
                allowLiteral: true,
                allowObject: true,
            },
        ],
    },
}
