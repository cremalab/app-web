import { Action } from "../Action"
import { TaggedAction } from "."

describe("TaggedAction", () => {
  it("returns a `TaggedAction<Action<Type, Payload>>`", () => {
    // Arrange
    const action = Action("TEST_TYPE", 5)

    // Act
    const received = TaggedAction(action)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
