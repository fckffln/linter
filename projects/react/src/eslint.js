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
        plugins: ['react', 'react-hooks'],
        extends: ['plugin:react/recommended', 'airbnb-base'].concat(
            ['./rules/import', './rules/no', './rules/react', './rules/base'].map(
                require.resolve
            )
        ),
        env: {
            browser: true,
            commonjs: true,
            es6: true,
            jest: true,
            node: true,
        },
        globals: {
            __ENV__: true,
            __MODE__: true,
            __EXT__: true,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {},
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                legacyDecorators: true,
            },
            overrides: [
                {
                    files: [
                        '*.ts',
                        '*.js',
                        '*.jsx',
                        '*.tsx'
                    ],
                    parserOptions: {
                        project: projects,
                        createDefaultProgram: true
                    },
                    extends: [
                        'plugin:react/recommended',
                        'plugin:prettier/recommended'
                    ],
                    rules: {
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
                        'plugin:prettier/recommended'
                    ],
                    rules: {}
                }
            ]
        },
    };
}

exports.eslintConfig = config;
