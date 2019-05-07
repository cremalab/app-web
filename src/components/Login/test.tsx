import { LoginWithFormik } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

// describe("Login", () => {
//   it("renders", () => {
//     // Arrange

//     // Act
//     const received = shallowRender(<Login />)

//     // Assert
//     expect(received).toMatchSnapshot()
//   })

// })

describe("Login", () => {
  it("renders", () => {
    // Arrange

    // Act
    const received = shallowRender(<LoginWithFormik />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
