import { render, screen } from "@testing-library/react"
import { App } from "./App"

describe("App", () => {
  test("renders a banner with header element", () => {
    render(<App />)
    expect(screen.getByRole("banner")).toBeInTheDocument()
  })

  test("renders a logo with alt attribute", () => {
    render(<App />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("alt", expect.any(String))
    expect(screen.getByRole("img").getAttribute("alt")).not.toHaveLength(0)
  })

  test("renders a link that says 'Learn React'", () => {
    render(<App />)
    expect(screen.getByRole("link", { name: "Learn React" })).toHaveAttribute(
      "href",
      "https://reactjs.org",
    )
  })
})
