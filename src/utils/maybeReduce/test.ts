import { maybeReduce } from "."
import { maybeWrap } from "../maybeWrap"

describe("maybeReduce", () => {
  it("handles Some", () => {
    // Arrange
    const maybe = maybeWrap(2)
    // Act
    const received = maybeReduce(() => "yep", "nope", maybe)
    // Assert
    expect(received).toEqual("yep")
  })

  it("handles None", () => {
    // Arrange
    const maybe = maybeWrap(undefined)
    // Act
    const received = maybeReduce(() => "yep", "nope", maybe)
    // Assert
    expect(received).toEqual("nope")
  })
})
