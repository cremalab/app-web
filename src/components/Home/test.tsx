import { Home } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("Home", () => {
  it("renders", () => {
    // Arrange
    const valA = Home

    // Act
    const received = shallowRender(<Home>{valA}</Home>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
