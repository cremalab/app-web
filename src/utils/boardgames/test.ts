import { boardgames } from "."

describe("boardgames", () => {
  it("works", () => {
    // Arrange
    const valA = 1

    // Act
    const received = boardgames(valA)

    // Assert
    expect(received).toEqual(1)
  })
})
