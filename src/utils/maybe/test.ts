import { maybe } from "."
import { None, Some } from "../../types/Maybe"

describe("maybe", () => {
  it("returns Maybe<A> for non-Nil value", () => {
    // Arrange
    const valA = 2
    // Act
    const received = maybe(valA)
    // Assert
    expect(received).toEqual(Some(2))
  })

  it("returns Maybe<A> for undefined", () => {
    // Arrange
    const valA: number[] = []
    // Act
    const received = maybe(valA.find(x => x === 2))
    // Assert
    expect(received).toEqual(None)
  })

  it("returns Maybe<A> for null", () => {
    // Arrange
    const valA = null
    // Act
    const received = maybe(valA)
    // Assert
    expect(received).toEqual(None)
  })
})
