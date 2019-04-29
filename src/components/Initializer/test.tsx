import { Initializer } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("Initializer", () => {
  it("renders", () => {
    // Arrange
    const valA = "Initializer"

    // Act
    const received = shallowRender(<Initializer>{valA}</Initializer>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
