import React from "react"
import { decoratorCentered } from "."

describe("decoratorCentered", () => {
  it("works", () => {
    // Arrange
    const story = () => <div>test</div>
    const context = { kind: "kind", story: "test" }

    // Act
    const received = decoratorCentered(story, context)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
