const DieRoll = require("./die-roll")
const DieFace = require("./die-face")

class Die {
  constructor(faces) {
    if ((faces || []).length == 0) {
      throw "Must supply faces to the die"
    } else if (faces.filter(face => face instanceof DieFace).length == 0) {
      throw "Must supply DieFace instances"
    }

    this.faces = faces
  }

  roll() {
    // Math.floor(Math.random() * Math.floor(this.sides))
    return new DieRoll(this.randomFace())
  }

  randomFace() {
    const index = Math.floor(Math.random() * Math.floor(this.faces.length))
    return this.faces[index]
  }
}

module.exports = Die
