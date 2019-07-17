import { validateToken } from "."

describe("validateToken", () => {
  it("works", () => {
    // Arrange
    const valA = 1

    // Act
    const received = validateToken(valA)

    // Assert
    expect(received).toEqual(1)
  })
})
