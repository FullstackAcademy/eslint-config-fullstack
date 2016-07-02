/* eslint-disable global-require, no-unused-expressions */
var linter = require('eslint').linter;
var expect = require('chai').expect;

describe('eslint-config-fullstack', function () {

  var eConfigFs;
  before('load the module', function () {
    eConfigFs = require('../index.js');
  });

  it('exports an object', function () {
    expect(eConfigFs).to.be.an('object');
  });

  it('extends the recommended ESLint config', function () {
    expect(eConfigFs.extends).to.equal('eslint:recommended');
  });

  it('has a `rules` property', function () {
    expect(eConfigFs).to.include.keys('rules');
  });

  it('works with eslint', function () {
    var messages = linter.verify('var x = 1;', eConfigFs);
    expect(messages).to.be.an('array');
    if (messages[0]) expect(messages[0].fatal).not.to.be.true;
  });

  it('has a parsing error for invalid source', function () {
    var messages = linter.verify('if;', eConfigFs);
    expect(messages).to.be.an('array');
    expect(messages[0].fatal).to.be.true;
  });

});
