const Die = require("./die")
const DieFace = require("./die-face")
const DieRoll = require("./die-roll")

describe("Die", () => {
  describe("new", () => {
    test("accepts an array of DieFace instances", () => {
      faces = [new DieFace({display: 1, value: 1})]
      const die = new Die(faces)

      expect(die.faces).toEqual(faces)
    })

    test("does not accept other values", () => {
      expect(() => {new Die([1])}).toThrow()
    })

    test("does not accept an empty array", () => {
      expect(() => {new Die([])}).toThrow()
      expect(() => {new Die()}).toThrow()
    })
  })

  describe(".roll()", () => {
    test("selects a random side", () => {
      const face1 = new DieFace({display: 1, value: 1})
      const face2 = new DieFace({display: 2, value: 2})
      const die = new Die([face1, face2])

      const result = die.roll()

      expect(result).toBeInstanceOf(DieRoll)
      expect(die.faces).toContain(result.face)
    })
  })
})
