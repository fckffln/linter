/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

module.exports = {
    rules: {
        'react/jsx-no-bind': 0,
        'react/prop-types': 0,
        'react/jsx-no-literals': 0,
        'react/no-did-mount-set-state': 0,
        'react/display-name': 0,
        'react/button-has-type': 0,
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
        'react/jsx-no-target-blank': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'warn',
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 'warn',
        'react/no-danger-with-children': 'warn',
        'react/no-deprecated': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'warn',
        'react/react-in-jsx-scope': 0,
        'react/require-render-return': 'error',
        'react/style-prop-object': 'warn',
        'react/no-string-refs': 'warn',
        'react/no-unescaped-entities': 'warn',
        'react/jsx-filename-extension': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
}
