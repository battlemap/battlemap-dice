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
    return this.faces[this.randomIndex()]
  }

  randomIndex() {
    return Math.floor(Math.random() * Math.floor(this.faces.length))
  }
}

module.exports = Die
