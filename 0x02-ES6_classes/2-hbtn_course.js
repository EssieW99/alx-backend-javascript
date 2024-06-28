export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /* getter for the name attribute */
  get name() {
    return this._name;
  }

  /* setter for the name attribute */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /* getter for the length attribute */
  get length() {
    return this._length;
  }

  /* setter for the length attribute */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /* getter for the students attribute */
  get students() {
    return this._students;
  }

  /* setter for the students attribute */
  set students(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      
        throw new TypeError('Students elements in the array must be strings');
    }
    this._students = value;
  }
}
