export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // override toString method
  toString() {
    return `[object ${this._code}]`;
  }
}
