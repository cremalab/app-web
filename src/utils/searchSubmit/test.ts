import { searchSubmit } from "."

describe("searchSubmit", () => {
  it("works", () => {
    // Arrange
    const valA = 1

    // Act
    const received = searchSubmit(valA)

    // Assert
    expect(received).toEqual(1)
  })
})
