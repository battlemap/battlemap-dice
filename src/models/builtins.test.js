const {Builtins,Die} = require("./index")

describe("Builtins.Polyhedral", () => {
  describe("new", () => {
    test("it instantiates a new polyhedral die", () => {
      const die = new Builtins.Polyhedral(6)

      expect(die).toBeInstanceOf(Die)
      expect(die).toBeInstanceOf(Builtins.Polyhedral)
      expect(die.faces.length).toEqual(6)
      expect(die.faces[0].display).toEqual(1)
      expect(die.faces[0].value).toEqual(1)
      expect(die.faces[5].display).toEqual(6)
      expect(die.faces[5].value).toEqual(6)
    })

    test("it does not accept a non-numeric number of sides", () => {
      expect(() => { new Builtins.Polyhedral("a") }).toThrow()
    })
  })
})
