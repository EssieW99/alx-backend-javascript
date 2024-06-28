import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /* getter for the amount attribute */
  get amount() {
    return this._amount;
  }

  /* setter for the amount attribute */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this.amount = value;
  }

  /* getter for the currency attribute */
  get currency() {
    return this.currency;
  }

  /* setter for the name attribute */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    this.currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /* static method */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
