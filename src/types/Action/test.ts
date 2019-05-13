import { Action } from "."

describe("Action", () => {
  it("returns an `Action<Type, Payload>`", () => {
    // Arrange
    const type = "SOME_TYPE"
    const payload = 2

    // Act
    const received = Action(type, payload)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
