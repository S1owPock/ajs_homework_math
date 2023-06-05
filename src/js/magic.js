export default class Magic {
  constructor() {
    /* eslint no-underscore-dangle: 0 */
    this._attack = 100;
    this.defence = 100;
    this._stoned = false;
  }

  get getStoned() {
    return this._stoned;
  }

  set stoned(parametr) {
    if (typeof parametr === 'boolean') {
      if (parametr) {
        this._stoned = true;
      } else {
        this._stoned = false;
      }
    } else {
      throw new Error('Параметр в stoned должен быть boolean');
    }
  }

  set attack(param) {
    if (param < 1 || param > 100) {
      throw new Error('Передаваемое значение атаки должно быть полложительным и меньше 100');
    }
    this._attack = param;
  }

  getAttack(distanse) {
    let attack = this._attack - (this._attack * 0.1 * (distanse - 1));
    if (this.getStoned) {
      attack -= Math.log2(distanse) * 5;
    }
    return Math.round(attack);
  }
}
