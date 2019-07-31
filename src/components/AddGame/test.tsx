import { AddGame } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("AddGame", () => {
  it("renders", () => {
    // Arrange
    const valA = AddGame

    // Act
    const received = shallowRender(<AddGame>{valA}</AddGame>)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
