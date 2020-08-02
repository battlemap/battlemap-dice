const {Builtins,DiceTower} = require("./index")

describe("DiceTower", () => {
  describe("new", () => {
    test("it initializes with a blank slate", () => {
      const tower = new DiceTower()

      expect(tower.pool.length).toEqual(0)
      expect(tower.modifier).toEqual(0)
      expect(tower.ticker.length).toEqual(0)
    })
  })

  describe(".add()", () => {
    test("it adds the given die to the pool", () => {
      const die = new Builtins.D6()
      const tower = new DiceTower()

      tower.add(die)

      expect(tower.pool.length).toEqual(1)
      expect(tower.pool).toContain(die)
    })

    test("it does not accept a non-die value", () => {
      const tower = new DiceTower()

      expect(() => { tower.add(5) }).toThrow()
    })
  })

  describe(".empty()", () => {
    test("it removes all dice from the pool", () => {
      const die = new Builtins.D6()
      const tower = new DiceTower()

      tower.add(die)

      expect(tower.pool).toContain(die)

      tower.empty()

      expect(tower.pool.length).toEqual(0)
    })

    test("it resets the modifier", () => {
      const tower = new DiceTower()

      tower.modifier = 2

      tower.empty()

      expect(tower.modifier).toEqual(0)
    })
  })

  describe(".modifier", () => {
    test("it remembers the given modifier", () => {
      const tower = new DiceTower()

      tower.modifier = 2

      expect(tower.modifier).toEqual(2)
    })

    test("it does not accept a non-integer value", () => {
      const tower = new DiceTower()

      expect(() => { tower.modifier = "asdf" }).toThrow()
    })
  })

  describe(".roll()", () => {
    test("it returns the result of the rolled dice", () => {
      const tower = new DiceTower()
      tower.add(new Builtins.D20)
      tower.add(new Builtins.D20)
      tower.modifier = 2

      const result = tower.roll()

      expect(result.modifier).toEqual(tower.modifier)
      expect(result.faces.length).toEqual(tower.pool.length)
    })

    test("it remembers the result in the ticker", () => {
      const tower = new DiceTower()
      tower.add(new Builtins.D20)

      const result = tower.roll()

      expect(tower.ticker).toContain(result)
    })
  })
})
