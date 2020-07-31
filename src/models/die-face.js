class DieFace {
  constructor(options) {
    if (typeof options.value == "undefined") {
      throw "Must supply a value"
    }

    this.value = options.value
    this.display = options.display || this.value
  }
}

module.exports = DieFace
