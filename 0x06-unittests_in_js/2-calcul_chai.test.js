const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('returns the sum of two integers', function() {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });

  it('returns the sum of two decimals', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('returns the result after subtracting whole integers', function() {
    expect(calculateNumber('SUBTRACT', 6, 3)).to.equal(3);
  });

  it('returns the result after subtracting two decimals', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('returns the result after the division of two whole integers', function() {
    expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
  });

  it('returns the result after dividing two integers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
  });

  it('returns the string Error when b is zero', function() {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
  });
});
