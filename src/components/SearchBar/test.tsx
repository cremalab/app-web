import { SearchBar } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("SearchBar", () => {
  it("renders", () => {
    // Arrange
    const valA = SearchBar

    // Act
    const received = shallowRender(<SearchBar>{valA}</SearchBar>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
