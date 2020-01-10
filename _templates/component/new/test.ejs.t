---
to: src/components/<%= name %>/test.tsx
---
<% if(useState) { -%>
import { <%= name %> } from "."
import React from "react"
import { render, fireEvent } from "@testing-library/react"

describe("<%= name %>", () => {
  it("has correct message before clicking", () => {
    // Arrange
    const name = "Click Me"
    const message = "You clicked 0 times"

    // Act
    const { getByText } = render(<<%= name %> name={name} />)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })

  it("has correct message after clicking", () => {
    // Arrange
    const name = "Click Me"
    const message = "You clicked 1 times"

    // Act
    const { getByText } = render(<<%= name %> name={name} />)
    const button = getByText(name)
    fireEvent.click(button)
    const received = getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } else { -%>
import { <%= name %> } from "."
import React from "react"
import { render } from "@testing-library/react"

describe("<%= name %>", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "<%= name %>"

    // Act
    const { getByText } = render(<<%= name %> name={name} />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
<% } -%>