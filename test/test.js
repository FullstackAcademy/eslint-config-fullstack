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
    var messsages = linter.verify('var x = 1;', eConfigFs);
    expect(messsages).to.be.an('array');
    if (messsages[0]) expect(messsages[0].fatal).not.to.be.true;
  });

  it('has a parsing error for invalid source', function () {
    var messsages = linter.verify('if;', eConfigFs);
    expect(messsages).to.be.an('array');
    expect(messsages[0].fatal).to.be.true;
  });

});
