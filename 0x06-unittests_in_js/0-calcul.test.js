const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('returns the sum of two integers', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('returns the sum with one rounded integer', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('returns the sum of two rounded integers', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
