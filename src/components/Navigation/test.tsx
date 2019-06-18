import { Navigation } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("Navigation", () => {
  it("renders", () => {
    // Arrange

    // Act
    const received = shallowRender(<Navigation />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
