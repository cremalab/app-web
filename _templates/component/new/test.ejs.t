---
to: src/components/<%= name %>/<%= name %>.test.tsx
sh: npx eslint ./src/components/<%= name %> --ext .ts,.tsx --fix --quiet && npx prettier --write "./src/components/<%= name %>/**/*"
---
import { <%= name %> } from "./<%= name %>"
<% if(!withExample) { -%>

describe("<%= name %>", () => {
  it("is defined", expect(<%= name %>).toBeDefined)

  it.todo(`add meaningful tests 👍`)
})
<% } else if(useState) { -%>
import { render, fireEvent, screen } from "@testing-library/react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is <%= name %>!"

    // Act
    render(<<%= name %> name="<%= name %>" />)
    const received = screen.getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
  
  it("has correct message before clicking", () => {
    // Arrange
    const message = "You clicked 0 times"

    // Act
    render(<<%= name %> name="<%= name %>" />)
    const received = screen.getByText(message)

    // Assert
    expect(received).toBeDefined()
  })

  it("has correct message after clicking", () => {
    // Arrange
    const buttonText = "Click Me"
    const message = "You clicked 1 times"

    // Act
    render(<<%= name %> name="<%= name %>" />)
    const button = screen.getByText(buttonText)
    fireEvent.click(button)
    const received = screen.getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } else { -%>
import { render, screen } from "@testing-library/react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is <%= name %>!"

    // Act
    const render(<<%= name %> name="<%= name %>" />)
    const received = screen.getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } -%>