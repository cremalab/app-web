import { maybeReduce } from "."
import { maybe } from "../maybe"

describe("maybeReduce", () => {
  it("handles Some", () => {
    // Arrange
    const maybeNumber = maybe(2)
    // Act
    const received = maybeReduce(() => "yep", "nope", maybeNumber)
    // Assert
    expect(received).toEqual("yep")
  })

  it("handles None", () => {
    // Arrange
    const maybeNumber = maybe<number>()
    // Act
    const received = maybeReduce(() => "yep", "nope", maybeNumber)
    // Assert
    expect(received).toEqual("nope")
  })
})
