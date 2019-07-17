import { Home } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("Home", () => {
  it("renders", () => {
    // Arrange

    // Act
    const received = shallowRender(<Home />)

    // Assert
    expect(received).toMatchSnapshot()
  })
  //test for <Home id=1>
})
