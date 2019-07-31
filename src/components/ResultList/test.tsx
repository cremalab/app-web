import { ResultList } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("ResultList", () => {
  it("renders", () => {
    // Arrange
    const valA = ResultList

    // Act
    const received = shallowRender(<ResultList>{valA}</ResultList>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
