'use strict';

/**
 * Fullstack Education Group
 * ESLint config for teaching full-stack ES5/6 JS
 * See http://eslint.org/docs/developer-guide/shareable-configs
 * Authored by Gabriel Lebec, 2016
 */

module.exports = {

	extends: [
		'./rules/base',
		'./rules/react'
	].map(require.resolve),

	env: {
		es6: true,
		browser: true,
		node: true,
		mocha: true,
		jasmine: true,
		jquery: true,
	},

	parserOptions: {
		ecmaVersion: 6
	},

	globals: {
		angular: true
	}

};
