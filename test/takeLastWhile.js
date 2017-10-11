var assert = require('assert');

var R = require('..');
var eq = require('./shared/eq');


describe('takeLastWhile', function() {
  it('continues taking elements while the function reports `true`', function() {
    eq(R.takeLastWhile(function(x) {return x !== 5;}, [1, 3, 5, 7, 9]), [7, 9]);
  });

  it('starts at the right arg and acknowledges undefined', function() {
    eq(R.takeLastWhile(function() { assert(false); }, []), []);
    eq(R.takeLastWhile(function(x) {return x !== void 0;}, [1, 3, void 0, 5, 7]), [5, 7]);
  });

  it('can operate on strings', function() {
    eq(R.takeLastWhile(function(x) { return x !== 'R'; }, 'Ramda'), 'amda');
  });

  it('is curried', function() {
    var takeLastUntil7 = R.takeLastWhile(function(x) {return x !== 7;});
    eq(takeLastUntil7([1, 3, 5, 7, 9]), [9]);
    eq(takeLastUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
  });

});
