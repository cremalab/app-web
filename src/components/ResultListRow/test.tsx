import { ResultListRow } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("ResultListRow", () => {
  it("renders", () => {
    // Arrange
    const name = "Uno"
    const year = "2019"
    const bgGeekID = "329303"

    // Act
    const received = shallowRender(
      <ResultListRow
        name={name}
        year={year}
        bgGeekID={bgGeekID}
        key={bgGeekID}
      />,
    )

    // Assert
    expect(received).toMatchSnapshot()
  })
})
