export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /* getter for the code attribute */
  get code() {
    return this._code;
  }

  /* setter for the code attribute */
  set code(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = value;
    }
  }

  /* getter for the name attribute */
  get name() {
    return this._name;
  }

  /* setter for the name attribute */
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code}) `;
  }
}
