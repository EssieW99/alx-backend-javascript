const { expect} = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with {data: "Successful response from the API" } when true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({data: 'Successful response from the API' });
      done();
    })
    .catch((error) => done(err));
  });
});
