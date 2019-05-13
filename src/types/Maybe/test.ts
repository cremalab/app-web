import { Maybe } from "."

describe("Maybe", () => {
  it("returns Maybe<A> for non-Nil value", () => {
    // Arrange
    const value = 2
    // Act
    const received = Maybe(value)
    // Assert
    expect(received).toEqual(Maybe.Some(2))
  })

  it("returns Maybe<A> for undefined", () => {
    // Arrange
    const value: number[] = []
    // Act
    const received = Maybe(value.find(x => x === 2))
    // Assert
    expect(received).toEqual(Maybe.None)
  })

  it("returns Maybe<A> for null", () => {
    // Arrange
    const value = null
    // Act
    const received = Maybe(value)
    // Assert
    expect(received).toEqual(Maybe.None)
  })

  describe("reduce", () => {
    it("handles Some", () => {
      // Arrange
      const maybeNumber = Maybe(2)
      // Act
      const received = Maybe.reduce(() => "yep", "nope", maybeNumber)
      // Assert
      expect(received).toEqual("yep")
    })

    it("handles None", () => {
      // Arrange
      const maybeNumber = Maybe<number>()
      // Act
      const received = Maybe.reduce(() => "yep", "nope", maybeNumber)
      // Assert
      expect(received).toEqual("nope")
    })
  })

  describe("map", () => {
    it("handles Some", () => {
      // Arrange
      const maybeNumber = Maybe(2)
      // Act
      const received = Maybe.map(x => x.toString(), maybeNumber)
      // Assert
      expect(received).toEqual(Maybe.Some("2"))
    })

    it("handles None", () => {
      // Arrange
      const maybeNumber = Maybe<number>()
      // Act
      const received = Maybe.map(x => x.toString(), maybeNumber)
      // Assert
      expect(received).toEqual(Maybe.None)
    })
  })

  describe("isSome", () => {
    it("returns true if Some<A>", () => {
      // Arrange
      const value = Maybe(2)
      // Act
      const received = Maybe.isSome(value)
      // Assert
      expect(received).toBe(true)
    })

    it("returns false if None", () => {
      // Arrange
      const value = Maybe()
      // Act
      const received = Maybe.isSome(value)
      // Assert
      expect(received).toBe(false)
    })
  })

  describe("isNone", () => {
    it("returns true if None", () => {
      // Arrange
      const value = Maybe()
      // Act
      const received = Maybe.isNone(value)
      // Assert
      expect(received).toBe(true)
    })

    it("returns false if Some<A>", () => {
      // Arrange
      const value = Maybe(2)
      // Act
      const received = Maybe.isNone(value)
      // Assert
      expect(received).toBe(false)
    })
  })

  describe("unwrap", () => {
    it("returns value from Some(value)", () => {
      // Arrange
      const value = Maybe(2)
      // Act
      const received = Maybe.unwrap(0, value)
      // Assert
      expect(received).toEqual(2)
    })

    it("returns default value from None", () => {
      // Arrange
      const value = Maybe<number>()
      // Act
      const received = Maybe.unwrap(0, value)
      // Assert
      expect(received).toEqual(0)
    })
  })
})
