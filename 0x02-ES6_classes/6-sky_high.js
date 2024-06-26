import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() { // eslint-disable-line class-methods-use-this
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}
