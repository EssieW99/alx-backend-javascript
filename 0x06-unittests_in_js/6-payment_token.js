function getPaymentTokenFromAPI(succes){
  if (succes) {
    return Promise.resolve({data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
