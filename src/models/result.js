const {assertFaces} = require("../util")

class Result {
  constructor(options) {
    assertFaces(options.faces)

    this.faces = options.faces
    this.modifier = options.modifier || 0
    this.total = this.calculateTotal()
  }

  calculateTotal() {
    let total = this.modifier
    for (const face of this.faces) {
      total += face.value
    }
    return total
  }
}

module.exports = Result
