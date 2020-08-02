const Die = require("./die")
const DieFace = require("./die-face")

class Polyhedral extends Die {
  constructor(sides) {
    if (Number.isNaN(sides)) {
      throw "Must supply a number of sides"
    }

    const faces = []
    for (let i = 1; i <= sides; i++) {
      faces.push(new DieFace({value: i}))
    }

    super(faces)
  }
}

class D2 extends Polyhedral {
  constructor() {
    super(2)
  }
}

class D4 extends Polyhedral {
  constructor() {
    super(4)
  }
}

class D6 extends Polyhedral {
  constructor() {
    super(6)
  }
}

class D8 extends Polyhedral {
  constructor() {
    super(8)
  }
}

class D10 extends Polyhedral {
  constructor() {
    super(10)
  }
}

class D12 extends Polyhedral {
  constructor() {
    super(12)
  }
}

class D20 extends Polyhedral {
  constructor() {
    super(20)
  }
}

class D100 extends Polyhedral {
  constructor() {
    super(100)
  }
}

module.exports = {
  Polyhedral: Polyhedral,
  D2: D2,
  D4: D4,
  D6: D6,
  D8: D8,
  D10: D10,
  D12: D12,
  D20: D20,
  D100: D100,
}
