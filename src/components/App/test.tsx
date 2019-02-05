import React from "react"
import ReactDOM from "react-dom"
import { App } from "."
import { shallowRender } from "../../utils/shallowRender"

describe("App", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders expected structure", () => {
    const received = shallowRender(<App />)
    expect(received).toMatchSnapshot()
  })
})
