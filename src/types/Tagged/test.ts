import { Tagged } from "."

describe("tagged", () => {
  it("returns a `Tagged<Tag, Data>`", () => {
    // Arrange
    const tag = "SOME_TAG"
    const data = { id: "2", name: "Jeff" }

    // Act
    const received = Tagged(tag, data)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
