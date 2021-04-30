import ReactDOM from "react-dom"
import { App } from "./App"

describe("App", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
