[![Built at Fullstack Academy](https://img.shields.io/badge/built%20at-Fullstack%20Academy-green.svg)](http://www.fullstackacademy.com)

![ESLint-Fullstack logo](https://learndotresources.s3.amazonaws.com/workshop/570bdee44a306c0300b78b52/eslint-fullstack.jpg)

# `eslint-config-fullstack`

### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for [Fullstack Education Group](http://www.fullstackacademy.com/) Students

## Installation

### Global

Global installation is recommended for [Fullstack Education Group](http://www.fullstackacademy.com/) students:

```sh
npm install -g eslint-config-fullstack
```

In your global `~/.eslintrc.json` file:

```json
{
  "extends": "fullstack"
}
```

Note that the `eslint-config-` portion of the module name is assumed by ESLint.

### Local

A specific project can extend this definition by including `eslint-config-fullstack` as a saved dependency, and a local `.eslintrc.json` which `{ "extends": "fullstack" }`.

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
