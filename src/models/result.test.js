const {DieFace,Result} = require("./index")

describe("Result", () => {
  describe("new", () => {
    test("remembers the values given to it", () => {
      const face = new DieFace({value: 5})
      const result = new Result({faces: [face], modifier: 10})

      expect(result.faces.length).toEqual(1)
      expect(result.faces).toContain(face)
      expect(result.modifier).toEqual(10)
    })

    test("does not accept non-faces", () => {
      expect(() => { new Result({faces: ["asdf"]}) }).toThrow()
    })

    test("does not accept an empty list", () => {
      expect(() => { new Result({faces: []}) }).toThrow()
    })
  })

  describe(".total", () => {
    test("it sums the faces and the modifier", () => {
      const face = new DieFace({value: 5})
      const result = new Result({faces: [face], modifier: 3})

      expect(result.total).toEqual(8)
    })
  })
})
