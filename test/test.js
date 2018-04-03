/* eslint-disable global-require, no-unused-expressions */
var path = require('path')
var expect = require('chai').expect
var CLIEngine = require('eslint').CLIEngine

describe('eslint-config-fullstack', function() {
    var eConfigFs, cli
    before('load the module', function() {
        eConfigFs = require('../index.js')
        cli = new CLIEngine({
            configFile: path.join(__dirname, '../index.js'),
        })
    })

    it('exports an object', function() {
        expect(eConfigFs).to.be.an('object')
    })

    it('works with eslint', function() {
        var report = cli.executeOnText('var x = 1;')
        expect(report.errorCount).to.equal(0)
    })

    it('has a parsing error for invalid source', function() {
        var report = cli.executeOnText('if;')
        expect(report.errorCount).to.equal(1)
    })

    it('flags broken rules from the base config', function() {
        var report = cli.executeOnText('var x = typeof 5 === "_oops_"')
        expect(report.errorCount).to.equal(1)
    })
})

describe('eslint-config-fullstack/react', function() {
    var cli
    before('load the module', function() {
        cli = new CLIEngine({
            configFile: path.join(__dirname, '../react.js'),
        })
    })

    it('works with eslint', function() {
        var report = cli.executeOnText('var x = 1;')
        expect(report.errorCount).to.equal(0)
    })

    it('has a parsing error for invalid source', function() {
        var report = cli.executeOnText('if;')
        expect(report.errorCount).to.equal(1)
    })

    it('flags broken rules from the base config', function() {
        var report = cli.executeOnText('var x = typeof 5 === "_oops_"')
        expect(report.errorCount).to.equal(1)
    })

    it('handles ES6 export and jsx', function() {
        var report = cli.executeOnText(
            'import React from "react"; export default function Bar () { return (<div>qux</div>); } Bar.displayName = "Bar"\n',
        )
        expect(report.errorCount).to.equal(0)
    })

    it('flags broken jsx', function() {
        var report = cli.executeOnText(
            'export default ({ foo }) => (<divs>{ foo }</div>);',
        )
        expect(report.errorCount).to.equal(1)
    })
})
