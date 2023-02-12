/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

function config(projects) {
    return {
        root: true,
        ignorePatterns: [
            'projects/**/*'
        ],
        overrides: [
            {
                files: [
                    '*.ts'
                ],
                parserOptions: {
                    project: projects,
                    createDefaultProgram: true
                },
                extends: [
                    'plugin:@angular-eslint/recommended',
                    'plugin:prettier/recommended'
                ],
                rules: {
                    '@angular-eslint/no-output-on-prefix': 'warn',
                    'prettier/prettier': ['error', {
                        endOfLine: 'auto',
                        trailingComma: 'all'
                    }],
                }
            },
            {
                files: [
                    '*.html'
                ],
                extends: [
                    'plugin:@angular-eslint/template/recommended',
                    'plugin:prettier/recommended'
                ],
                rules: {}
            }
        ]
    };
}

exports.eslintConfig = config;
