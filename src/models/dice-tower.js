const Die = require("./die")
const Result = require("./result")

class DiceTower {
  constructor() {
    this.modifier = 0
    this.pool = []
    this.ticker = []
  }

  get modifier() {
    return this._modifier
  }

  set modifier(value) {
    if (!Number.isInteger(value)) {
      throw "Must be a number"
    }

    this._modifier = value
  }

  add(die) {
    if (die instanceof Die) {
      this.pool.push(die)
    } else {
      throw "Must add a Die instance"
    }
  }

  empty() {
    this.pool = []
    this.modifier = 0
  }

  roll() {
    const faces = []
    for (const die of this.pool) {
      faces.push(die.roll())
    }

    const result = new Result({faces: faces, modifier: this.modifier})
    this.ticker.push(result)
    return result
  }
}

module.exports = DiceTower
