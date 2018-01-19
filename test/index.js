"use strict";

var should = require("chai").should();
var ufocore = require("../");

describe('#versionGuard', function() {
  it('global._ufocore should be defined', function() {
    should.equal(global._ufocore, ufocore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      ufocore.versionGuard('version');
    }).should.throw('More than one instance of ufocore');
  });
});
