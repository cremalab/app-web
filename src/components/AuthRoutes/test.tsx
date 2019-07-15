import { AuthRoutes } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("AuthRoutes", () => {
  it("renders", () => {
    // Arrange

    // Act
    const received = shallowRender(<AuthRoutes />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
