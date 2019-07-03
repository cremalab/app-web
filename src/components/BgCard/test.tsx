import { BgCardBase as BgCard } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("BgCard", () => {
  it("renders", () => {
    // Arrange
    const valA = BgCard

    // Act
    const received = shallowRender(<BgCard>{valA}</BgCard>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
