# Contributing to this Project

Thank you for your interest. `eslint-config-fullstack` generally conforms to the following principles:

*   Configuring rules
    *   Maintain a list of every base ESLint rule & every `eslint-plugin-react` rule. This means tracking changes to those packages, which [Greenkeeper](https://greenkeeper.io/) helps with.
        *   When a new version of those deps is published, read the changelog and add / modify the relevant rules in the corresponding Greenkeeper branch. **Do not** simply merge the GK branch as-is.
            _ When simply turning rules off, set them to `0`, do not delete them
            _ Delete deprecated rules only
        *   Keep the rule summary, verbatim from the corresponding API reference, as a comment following the rule
    *   Activate rules whose pedagogical and/or stylistic value outweighs their annoyance
        *   If a rule _almost definitely_ indicates broken code, set it to `2` (error)
        *   If a rule _quite possibly_ flags code that could still work, set it to `1` (warning)
*   Code style
    *   This repo uses [Prettier](https://prettier.io/) and [lint-staged](https://github.com/okonet/lint-staged) to automatically maintain formatting.
    *   If you prefer, you can run Prettier yourself on the code to preview how it will be auto-formatted, using `npm run prettify` or activating an [editor plugin](https://prettier.io/docs/en/editors.html)
*   Respect [SEMVER](https://semver.org/) when publishing to npm
    *   Turning rules off will count as a minor change as nobody's code should break (in theory)
    *   Turning rules on or changing their options should count as a major change as linting may now result in nonzero exit codes where none existed before
