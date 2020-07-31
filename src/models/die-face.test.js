const DieFace = require("./die-face")

describe("DieFace", () => {
  describe("new", () => {
    test("it accepts display and value options", () => {
      const face = new DieFace({display: "foo", value: 1})

      expect(face.display).toEqual("foo")
      expect(face.value).toEqual(1)
    })

    test("it defaults the display to the value option if not provided", () => {
      const face = new DieFace({value: 1})

      expect(face.display).toEqual(1)
      expect(face.value).toEqual(1)
    })

    test("it does not accept a missing value option", () => {
      console.log("TEST")
      expect(() => {new DieFace({display: "foo"})}).toThrow()
    })
  })
})

