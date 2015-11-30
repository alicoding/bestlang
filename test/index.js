var parser = require('../');
var should = require('should');

describe('Parser tests', function() {
  it('Test result should equal to `en-CA`', function() {
    should(parser(['fr', 'en-CA', 'fr-CA'], ['en', 'en-IN', 'en-CA', 'id', 'de'], 'en-US')).eql('en-CA');
  });

  it('Test result should equal to `en`', function() {
    should(parser(['fr', 'en-CA', 'fr-CA'], ['en', 'en-IN', 'id', 'de'], 'en-US')).eql('en');
  });

  it('Test result should equal to `fr`', function() {
    should(parser(['fr-CA', 'en'], ['fr', 'de'], 'en-US')).eql('fr');
  });

  it('Test result should equal to `en-US`', function() {
    should(parser(['fr', 'en'], ['fr-CA', 'de'], 'en-US')).eql('en-US');
  });

  it('Test result should equal to `en`', function() {
    should(parser(['en', 'en-CA', 'fr-CA'], ['en', 'en-IN', 'en-CA', 'id', 'de'], 'en-US')).eql('en');
  });

  it('Should throw an error if missing first default language', function() {
    should.throws(function() {
      parser(['fr', 'en-CA', 'fr-CA'], ['en', 'en-IN', 'en-CA', 'id', 'de']);
    });
  });
  it('Should throw an error if missing second argument', function() {
    should.throws(function() {
      parser(['fr', 'en-CA', 'fr-CA'], 'en', 'de');
    });
  });
  it('Should throw an error if not using the right type argument', function() {
    should.throws(function() {
      parser('fr', ['fr-CA'], 'de');
    });
  });
});