import { taggedAction } from "."

describe("taggedAction", () => {
  it("returns a `TaggedAction<Type, Payload>`", () => {
    // Arrange
    const action = { type: "SOME_TYPE", payload: 2 }

    // Act
    const received = taggedAction(action)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
