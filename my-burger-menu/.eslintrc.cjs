module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		// Note: you must disable the base rule as it can report incorrect errors
		'no-unused-vars': 'warn',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
};