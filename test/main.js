var should = require('should');
var tetraParser  = require('../lib/main.js');

describe('tetraParser', function () {
  describe('with no arguments', function () {
    it('returns an empty object', function () {
      var result = tetraParser();
      result.should.eql({});
    })
  });
});
