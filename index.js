'use strict';
var YAML = require('yamljs');
var path = require('path');

module.exports = YAML.load(path.join(__dirname, 'eslintrc.yml'));
