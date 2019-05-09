import { maybeIsSome } from "."
import { None, Some } from "../../types/Maybe"

describe("maybeIsSome", () => {
  it("returns true if Some<A>", () => {
    // Arrange
    const valA = Some(2)
    // Act
    const received = maybeIsSome(valA)
    // Assert
    expect(received).toBe(true)
  })

  it("returns false if None", () => {
    // Arrange
    const valA = None
    // Act
    const received = maybeIsSome(valA)
    // Assert
    expect(received).toBe(false)
  })
})
