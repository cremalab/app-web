import { Login } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("Login", () => {
  it("renders", () => {
    // Arrange

    // Act
    const received = shallowRender(<Login />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
