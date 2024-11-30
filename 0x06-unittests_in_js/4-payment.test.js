const { expect} = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('stub Utils.calculateNumber and spy on the console.log ', function() {
    const calcTotal = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLog = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calcTotal.calledOnce).to.be.true;
    expect(calcTotal.calledWith('SUM', 100, 20)).to.be.true;

    expect(consoleLog.calledOnce).to.be.true;
    expect(consoleLog.calledWith('The total is: 10')).to.be.true;

    calcTotal.restore();
    consoleLog.restore();
  });
});
