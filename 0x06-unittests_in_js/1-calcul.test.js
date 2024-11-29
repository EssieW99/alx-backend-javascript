const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('returns the sum of two integers', function() {
    assert.equal(calculateNumber('SUM', 2, 3), 5);
  });

  it('returns the sum of two decimals', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('returns the result after subtracting whole integers', function() {
    assert.equal(calculateNumber('SUBTRACT', 6, 3), 3);
  });

  it('returns the result after subtracting two decimals', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('returns the result after the division of two whole integers', function() {
    assert.equal(calculateNumber('DIVIDE', 8, 4), 2);
  });

  it('returns the result after dividing two integers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
  });

  it('returns the string Error when b is zero', function() {
    assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
  });
});
