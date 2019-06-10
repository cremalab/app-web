import { setAuthorization } from "."

describe("setAuthorization", () => {
  it("works", () => {
    // Arrange
    var token = ""
    // Act
    const received = setAuthorization(token)

    // Assert
    expect(received)
  })
})
