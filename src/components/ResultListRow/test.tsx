import { ResultListRow } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("ResultListRow", () => {
  it("renders", () => {
    // Arrange
    const valA = ResultListRow

    // Act
    const received = shallowRender(<ResultListRow>{valA}</ResultListRow>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
