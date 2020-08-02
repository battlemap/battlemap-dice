const DieFace = require("./models/die-face")

module.exports = {
  assertFaces: (array) => {
    if ((array || []).length == 0) {
      throw "Must supply faces to the die"
    } else if (array.filter(face => face instanceof DieFace).length == 0) {
      throw "Must supply DieFace instances"
    }
  },
}
