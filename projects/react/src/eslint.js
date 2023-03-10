/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

/**
 * @param js {string | string[] | undefined}
 * @param jsx {string | string[] | undefined}
 * @param ts {string | string[] | undefined}
 * @param tsx {string | string[] | undefined}
 * @param html {string | string[] | undefined}
 * @return {{parserOptions: {ecmaVersion: string, sourceType: string, createDefaultProgram: boolean}, root: boolean, overrides: [{extends: string[], files: string[], rules: {"space-before-blocks": string, "no-unreachable": string, "no-func-assign": string, "no-regex-spaces": string, "no-multi-assign": number, "import/dynamic-import-chunkname": number, "no-tabs": number, "no-self-compare": string, quotes: string[], "no-unused-labels": string, "max-classes-per-file": number, "no-const-assign": string, "max-len": [string,{code: number}], "no-new-wrappers": string, "spaced-comment": number, "no-negated-in-lhs": string, "no-useless-escape": string, "no-param-reassign": number, "no-implied-eval": string, strict: string[], "no-template-curly-in-string": string, "eol-last": number, "generator-star-spacing": string, "prefer-destructuring": [string,{array: boolean, object: boolean}], "no-new-func": string, "no-eval": string, "new-parens": string, "import/no-anonymous-default-export": [number,{allowAnonymousFunction: boolean, allowLiteral: boolean, allowCallExpression: boolean, allowArrowFunction: boolean, allowObject: boolean, allowAnonymousClass: boolean, allowArray: boolean}], "arrow-body-style": number, "import/no-webpack-loader-syntax": number, "class-methods-use-this": number, "no-delete-var": string, "no-extra-bind": string, "no-plusplus": number, "no-empty-pattern": string, "no-dupe-args": string, "no-ex-assign": string, "no-useless-concat": string, "no-control-regex": string, "default-case": number, "prefer-promise-reject-errors": number, "no-invalid-regexp": string, "import/order": number, "no-restricted-syntax": string[], "import/extensions": number, "valid-typeof": string, "no-iterator": string, semi: number, "no-with": string, "import/named": number, "no-empty-character-class": string, "import/first": number, "no-debugger": number, "import/newline-after-import": number, "no-extend-native": string, "import/export": number, "no-cond-assign": string[], "no-redeclare": string, "one-var": string[], radix: number, "no-new": number, "no-obj-calls": string, "prettier/prettier": number[], "import/no-cycle": number, "space-before-function-paren": number, "unicode-bom": string[], "no-extra-label": string, "no-useless-constructor": string, "import/prefer-default-export": number, "import/no-extraneous-dependencies": number, "lines-between-class-members": number, "dot-location": string[], "import/no-unresolved": number, "no-octal": string, "no-new-object": string, "no-new-symbol": string, "import/no-amd": number, "func-names": number, "no-trailing-spaces": number, "no-self-assign": string, "no-underscore-dangle": number, camelcase: number, "no-useless-rename": [string,{ignoreExport: boolean, ignoreImport: boolean, ignoreDestructuring: boolean}], "space-unary-ops": number, "space-infix-ops": string, "no-fallthrough": string, "no-confusing-arrow": number, "no-unused-vars": number, "no-octal-escape": string, "array-callback-return": string, "no-sparse-arrays": string, "no-alert": number, "arrow-parens": number, "operator-linebreak": number, "no-script-url": number, "object-curly-newline": number, "no-unexpected-multiline": string, "implicit-arrow-linebreak": number, "function-paren-newline": number, "no-dupe-keys": string, "no-sequences": string, "no-undef": string, "no-loop-func": string, eqeqeq: number, "no-shadow-restricted-names": string, indent: [number,string,{SwitchCase: number}], "no-mixed-operators": [string,{groups: string[][], allowSamePrecedence: boolean}], "no-console": number, "no-native-reassign": string, "no-extra-boolean-cast": number, "no-useless-computed-key": string, "comma-dangle": number, "no-labels": [string,{allowLoop: boolean, allowSwitch: boolean}], "no-whitespace-before-property": string, "no-label-var": string, "no-else-return": number, "no-use-before-define": [string,{variables: boolean, functions: boolean, classes: boolean}], "no-array-constructor": string, "linebreak-style": number, "require-yield": string, "use-isnan": string, "rest-spread-spacing": string[], "no-restricted-properties": [string,{property: string, message: string, object: string}], "no-caller": string, "no-lone-blocks": string, "no-unused-expressions": number, "no-return-await": string, "no-dupe-class-members": string, "no-multi-str": string, "no-throw-literal": string, "prefer-const": number, "no-duplicate-case": string, "prefer-template": number, "no-var": string, "consistent-return": number, "no-this-before-super": string}},{extends: string[], files: string[], rules: {}}], env: {node: boolean, browser: boolean, es6: boolean, amd: boolean}}}
 */
function config({js, jsx, ts , tsx, html} = {js: '*.js', jsx: '*.jsx', ts: '*.ts', tsx: '*.tsx', html: '*.html'}) {
	const _js = js ? (Array.isArray(js) ? js : [js]) : [];
	const _jsx = js ? (Array.isArray(jsx) ? jsx : [jsx]) : [];
	const _ts = ts ? (Array.isArray(ts) ? ts : [ts]) : [];
	const _tsx = ts ? (Array.isArray(ts) ? tsx : [tsx]) : [];
	const _html = html ? (Array.isArray(html) ? html : [html]) : [];
	return {
		root: true,
		parserOptions: {
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true,
				legacyDecorators: true,
			},
			ecmaVersion: 'latest',
			createDefaultProgram: true,
		},
		env: {
			es6: true,
			browser: true,
			amd: true,
			node: true,
		},
		overrides: [
			{
				files: [..._ts, ..._tsx, ..._js, ..._jsx],
				extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
				rules: {
					'generator-star-spacing': 'off',
					'func-names': 0,
					'linebreak-style': 0,
					semi: 0,
					'comma-dangle': 0,
					'space-before-function-paren': 0,
					'arrow-parens': 0,
					quotes: ['warn', 'single'],
					'space-unary-ops': 0,
					'class-methods-use-this': 0,
					radix: 0,
					'object-curly-newline': 0,
					'operator-linebreak': 0,
					'implicit-arrow-linebreak': 0,
					'spaced-comment': 0,
					'consistent-return': 0,
					'prefer-const': 1,
					'max-len': ['warn', { code: 200 }],
					'prefer-template': 0,
					camelcase: 0,
					'eol-last': 0,
					'lines-between-class-members': 0,
					'array-callback-return': 'warn',
					'default-case': 0,
					'dot-location': ['warn', 'property'],
					eqeqeq: 0,
					'new-parens': 'warn',
					'require-yield': 'warn',
					'rest-spread-spacing': ['warn', 'never'],
					strict: ['warn', 'never'],
					'unicode-bom': ['warn', 'never'],
					'use-isnan': 'warn',
					'valid-typeof': 'warn',
					'max-classes-per-file': 0,
					'arrow-body-style': 0,
					'function-paren-newline': 0,
					'prefer-destructuring': ['warn', { object: true, array: false }],
					'space-before-blocks': 'warn',
					'space-infix-ops': 'warn',
					'prefer-promise-reject-errors': 0,
					'import/named': 0,
					'import/no-unresolved': 0,
					'import/export': 0,
					'import/order': 0,
					'import/no-extraneous-dependencies': 0,
					'import/prefer-default-export': 0,
					'import/newline-after-import': 0,
					'import/extensions': 0,
					'import/first': 0,
					'import/no-amd': 0,
					'import/no-webpack-loader-syntax': 0,
					'import/no-cycle': 0,
					'import/dynamic-import-chunkname': 0,
					'import/no-anonymous-default-export': [
						0,
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
					'no-new': 0,
					'no-debugger': 0,
					'no-console': 0,
					'no-alert': 0,
					'no-param-reassign': 0,
					'no-plusplus': 0,
					'no-unused-vars': 1,
					'no-underscore-dangle': 0,
					'no-multi-assign': 0,
					'no-extra-boolean-cast': 1,
					'no-else-return': 1,
					'no-array-constructor': 'warn',
					'no-caller': 'warn',
					'no-cond-assign': ['warn', 'always'],
					'no-const-assign': 'warn',
					'no-control-regex': 'warn',
					'no-delete-var': 'warn',
					'no-dupe-args': 'warn',
					'no-dupe-class-members': 'warn',
					'no-dupe-keys': 'warn',
					'no-duplicate-case': 'warn',
					'no-empty-character-class': 'warn',
					'no-empty-pattern': 'warn',
					'no-eval': 'warn',
					'no-ex-assign': 'warn',
					'no-extend-native': 'warn',
					'no-extra-bind': 'warn',
					'no-extra-label': 'warn',
					'no-fallthrough': 'warn',
					'no-func-assign': 'warn',
					'no-implied-eval': 'warn',
					'no-invalid-regexp': 'warn',
					'no-iterator': 'warn',
					'no-label-var': 'warn',
					'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
					'no-lone-blocks': 'warn',
					'no-loop-func': 'warn',
					'no-return-await': 'warn',
					'no-mixed-operators': [
						'warn',
						{
							groups: [
								['&', '|', '^', '~', '<<', '>>', '>>>'],
								['==', '!=', '===', '!==', '>', '>=', '<', '<='],
								['&&', '||'],
								['in', 'instanceof'],
							],
							allowSamePrecedence: false,
						},
					],
					'no-multi-str': 'warn',
					'no-native-reassign': 'warn',
					'no-negated-in-lhs': 'warn',
					'no-new-func': 'warn',
					'no-new-object': 'warn',
					'no-new-symbol': 'warn',
					'no-new-wrappers': 'warn',
					'no-obj-calls': 'warn',
					'no-octal': 'warn',
					'no-octal-escape': 'warn',
					'no-redeclare': 'warn',
					'no-regex-spaces': 'warn',
					'no-restricted-syntax': ['warn', 'WithStatement'],
					'no-script-url': 0,
					'no-self-assign': 'warn',
					'no-self-compare': 'warn',
					'no-sequences': 'warn',
					'no-shadow-restricted-names': 'warn',
					'no-sparse-arrays': 'warn',
					'no-template-curly-in-string': 'warn',
					'no-this-before-super': 'warn',
					'no-throw-literal': 'warn',
					'no-undef': 'error',
					'no-unexpected-multiline': 'warn',
					'no-unreachable': 'warn',
					'no-unused-expressions': 0,
					'no-unused-labels': 'warn',
					'no-use-before-define': [
						'warn',
						{
							functions: false,
							classes: false,
							variables: false,
						},
					],
					'no-useless-computed-key': 'warn',
					'no-useless-concat': 'warn',
					'no-useless-constructor': 'warn',
					'no-useless-escape': 'warn',
					'no-useless-rename': [
						'warn',
						{
							ignoreDestructuring: false,
							ignoreImport: false,
							ignoreExport: false,
						},
					],
					'no-with': 'warn',
					'no-whitespace-before-property': 'warn',
					'no-restricted-properties': [
						'error',
						{
							object: 'System',
							property: 'import',
							message:
                                'Please use import() instead. More info: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
						},
					],
					'one-var': ['warn', 'never'],
					'no-var': 'warn',
					'no-confusing-arrow': 0,
					'no-trailing-spaces': 0,
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
					'react-hooks/rules-of-hooks': 0,
					'react-hooks/exhaustive-deps': 0,
					'indent': [2, 'tab', { 'SwitchCase': 1 }],
					'prettier/prettier': [0],
					'no-tabs': 0,
					'react/jsx-indent-props': 0,
				},
			},
			{
				files: _html,
				extends: ['plugin:prettier/recommended'],
				rules: {},
			},
		],
	};
}

module.exports = config;
