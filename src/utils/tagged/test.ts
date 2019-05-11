import { tagged } from "."

describe("tagged", () => {
  it("returns a `Tagged<Tag, Data>`", () => {
    // Arrange
    const valA = "SOME_TAG"

    // Act
    const received = tagged(valA, undefined)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
