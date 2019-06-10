import { AppRouter } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("AppRouter", () => {
  it("renders", () => {
    // Arrange

    // Act
    const received = shallowRender(<AppRouter />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
