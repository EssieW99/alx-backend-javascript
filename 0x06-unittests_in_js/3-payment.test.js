const { expect} = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('calls Utils.calculateNumber with "SUM" operation with its args ', function() {
    const calcTotal = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(60, 20);
    expect(calcTotal.calledOnce).to.be.true;
    expect(calcTotal.calledWith('SUM', 60, 20)).to.be.true;
    calcTotal.restore();
  });
});
