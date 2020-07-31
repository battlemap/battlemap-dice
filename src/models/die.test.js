const {Die,DieFace} = require("./index")

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
      const die = new Die([
        new DieFace({display: 1, value: 1}),
        new DieFace({display: 2, value: 2}),
      ])

      const result = die.roll()

      expect(die.faces).toContain(result)
    })
  })
})
