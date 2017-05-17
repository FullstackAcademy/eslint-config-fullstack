[![npm version](https://img.shields.io/npm/v/eslint-config-fullstack.svg?maxAge=3600)](https://www.npmjs.com/package/eslint-config-fullstack)
[![Codeship](https://img.shields.io/codeship/4ae0bfb0-1c07-0134-222f-22fb94432a98.svg)](https://codeship.com/projects/159804)
[![Greenkeeper.io is keeping this repo's dependencies up to date](https://img.shields.io/badge/greenkeeper.io-monitoring-brightgreen.svg?maxAge=3600)](https://greenkeeper.io/)
[![Built at Fullstack Academy](https://img.shields.io/badge/built%20at-Fullstack%20Academy-green.svg)](http://www.fullstackacademy.com)

<img src="https://learndotresources.s3.amazonaws.com/workshop/570bdee44a306c0300b78b52/eslint-fullstack.jpg" align="right">

# `eslint-config-fullstack`

### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Fullstack Education Group](http://www.fullstackacademy.com/) Students

## Installation

### Global

Global installation is recommended for [Fullstack Education Group](http://www.fullstackacademy.com/) students. To install or upgrade the config along with its peer dependencies:

```sh
npm install -g eslint eslint-config-fullstack eslint-plugin-react
```

In your global `~/.eslintrc.json` file:

```json
{
  "extends": "fullstack"
}
```

Note that the `eslint-config-` portion of the module name is assumed by ESLint.

### Local

A specific project can extend this definition by including `eslint eslint-config-fullstack eslint-plugin-react` as saved dev-dependencies, and defining a local `.eslintrc.json`. Project-level eslintrc files are recommended to be set as `root`, which prevents users' global configs from producing inconsistent results:

```json
{
	"extends": "fullstack",
	"root": true
}
```

### For Babel-Transpiled Projects

This config's peer dependencies (eslint, eslint-plugin-react) enable linting relatively modern files including JSX components. If you find that the linter fails to understand some early-stage ES features, you can enable parsing using Babel instead of ESLint's default parser. Install `babel-eslint` and set the `parser` option of your config:

```sh
npm install babel-eslint --save-dev
```

```json
{
	"parser": "babel-eslint",
	"extends": "fullstack",
	"root": true
}
```

## Extending

Any [rules](http://eslint.org/docs/rules/) added to your global or local `.eslintrc.json` files will override the rules defined by this package. For example:

```json
{
  "extends": "fullstack",
  "rules": {
    "semi": [1, "always"]
  }
}
```

This turns on enforcing the use of semicolons, a rule which is silenced by default in the current version of the `eslint-config-fullstack` package.

## Background

The [ESLint](http://http://eslint.org/) linting system is a popular one for its support of ES6 syntax, pluggable [rules](http://eslint.org/docs/rules/), automatic rule names in warning messages, and [shareable](http://eslint.org/docs/developer-guide/shareable-configs) / [extendable](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) config files.

This npm package provides a thorough starting config file. It was developed at [Fullstack Academy of Code / Grace Hopper Academy](http://www.fullstackacademy.com/) to use in an educational setting, helping students to avoid definite errors but also pick up best practices.

Because it defaults to supporting multiple environments (e.g. Node, browsers, Jasmine, Mocha, etc.) it is probably not suitable for general production, where one might want a finer-grained and more restrictive config. However it is easy to override and extend this base config with custom rules, [as explained above and in the ESLint docs](http://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package).

## License

MIT
