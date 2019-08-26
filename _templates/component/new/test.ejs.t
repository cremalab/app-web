---
to: src/components/<%= name %>/test.tsx
---
<% if(useState) { -%>
import { <%= name %> } from "."
import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"

describe("<%= name %>", () => {
  beforeEach(cleanup)

  it("has correct message before clicking", () => {
    // Arrange
    const name = "Click Me"
    const message = "You clicked 0 times"

    // Act
    const { getByText } = render(<<%= name %> name={name} />)

    // Assert
    expect(getByText(message)).toBeDefined()
  })

  it("has correct message after clicking", () => {
    // Arrange
    const name = "Click Me"
    const message = "You clicked 1 times"

    // Act
    const { getByText } = render(<<%= name %> name={name} />)
    const button = getByText(name)
    fireEvent.click(button)

    // Assert
    expect(getByText(message)).toBeDefined()
  })
})
<% } else { -%>
import { <%= name %> } from "."
import React from "react"
import { render, cleanup } from "@testing-library/react"

describe("<%= name %>", () => {
  beforeEach(cleanup)

  it("has expected structure", () => {
    // Arrange
    const name = "<%= name %>"

    // Act
    const { container } = render(<<%= name %> name={name} />)

    // Assert
    expect(container).toMatchSnapshot()
  })
})
<% } -%>