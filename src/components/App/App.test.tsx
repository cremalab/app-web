import { render, screen } from "@testing-library/react"
import { App } from "./App"

describe("App", () => {
  it("renders expected text", () => {
    // Arrange
    const text = "Learn React"

    // Act
    render(<App />)
    const received = screen.getByText(text)

    // Assert
    expect(received).toBeDefined()
  })
})
