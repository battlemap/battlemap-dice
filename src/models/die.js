const DieFace = require("./die-face")
const {assertFaces} = require("../util")

class Die {
  constructor(faces) {
    assertFaces(faces)

    // TODO add name to a die (like "d20", "Advantage die")
    this.faces = faces
  }

  roll() {
    return this.faces[this.randomIndex()]
  }

  randomIndex() {
    return Math.floor(Math.random() * Math.floor(this.faces.length))
  }
}

class Polyhedral extends Die {
}

module.exports = Die
