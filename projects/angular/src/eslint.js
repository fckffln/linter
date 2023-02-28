/**
 * @license
 * Copyright fckffln
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://fckff.app/license
 */

/**
 * @param js {string | string[] | undefined}
 * @param ts {string | string[] | undefined}
 * @param html {string | string[] | undefined}
 * @return {{parserOptions: {ecmaVersion: string, sourceType: string, createDefaultProgram: boolean, ecmaFeatures: {legacyDecorators: boolean}}, root: boolean, overrides: [{extends: string[], files: *[], rules: {"prettier/prettier": [string,{endOfLine: string, trailingComma: string}], "@angular-eslint/no-output-on-prefix": string}},{extends: string[], files: (string[]|*[]), rules: {}}], env: {node: boolean, browser: boolean, es6: boolean, amd: boolean}}}
 */
function config({js, ts, html} = {js: '*.js', ts: '*.ts', html: '*.html'}) {
	const _js = js ? (Array.isArray(js) ? js : [js]) : [];
	const _ts = ts ? (Array.isArray(ts) ? ts : [ts]) : [];
	const _html = html ? (Array.isArray(html) ? html : [html]) : [];
	return {
		root: true,
		parserOptions: {
			sourceType: 'module',
			ecmaFeatures: {
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
				files: [
					..._ts,
					..._js,
				],
				extends: [
					'plugin:@angular-eslint/recommended',
					'plugin:prettier/recommended'
				],
				rules: {
					'@angular-eslint/no-output-on-prefix': 'warn',
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
					'indent': [2, 'tab', { 'SwitchCase': 1 }],
					'prettier/prettier': [0],
					'no-tabs': 0,
				},
			},
			{
				files: _html,
				extends: [
					'plugin:@angular-eslint/template/recommended',
					'plugin:prettier/recommended'
				],
				rules: {}
			}
		]
	};
}

module.exports = config;
