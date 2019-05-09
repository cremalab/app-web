import { maybeUnwrap } from "."
import { None, Some } from "../../types/Maybe"

describe("maybeUnwrap", () => {
  it("returns value from Some(value)", () => {
    // Arrange
    const valA = Some(2)
    // Act
    const received = maybeUnwrap(valA, 0)
    // Assert
    expect(received).toEqual(2)
  })

  it("returns default value from None", () => {
    // Arrange
    const valA = None
    // Act
    const received = maybeUnwrap(valA, 0)
    // Assert
    expect(received).toEqual(0)
  })
})
