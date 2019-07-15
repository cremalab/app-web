import { Search } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("Search", () => {
  it("renders", () => {
    // Arrange
    const valA = Search

    // Act
    const received = shallowRender(<Search>{valA}</Search>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
