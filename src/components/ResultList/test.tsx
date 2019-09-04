import { ResultList } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"
import { ItemInit } from "../../utils/searchSubmit"

describe("ResultList", () => {
  it("renders", () => {
    // Arrange
    const valA = ItemInit

    // Act
    const received = shallowRender(<ResultList items={valA} />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
