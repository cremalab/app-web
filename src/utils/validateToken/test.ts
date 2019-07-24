import { validateToken } from "."

describe("validateToken", () => {
  it("works", () => {
    // Arrange
    const valA = "token"

    // Act
    const received = validateToken(valA)

    // Assert
    expect(received)
  })
})
