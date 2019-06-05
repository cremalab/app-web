---
to: src/components/<%= name %>/test.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
import { <%= connected ? `${nameBase} as ${name}` : name %> } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("<%= name %>", () => {
  it("renders", () => {
    // Arrange
    const valA = "<%= name %>"

    // Act
    const received = shallowRender(<<%= name %> name="<%= name %>" />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
