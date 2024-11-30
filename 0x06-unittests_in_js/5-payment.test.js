const { expect} = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restre();
  });

  it('logs the correct total for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect.calledOnce(consoleSpy).to.be.true;
    expect.calledWithExactly(consoleSpy, 'The total is: 120').to.be.true;
  });

  it('logs the correct total for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect.calledOnce(consoleSpy).to.be.true;
    expect.calledWithExactly(consoleSpy, 'The total is: 20').to.be.true;
  });
});
