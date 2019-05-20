---
to: src/components/<%= name %>/test.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
import { <%= connected ? `${nameBase} as ${name}` : name %> } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("<%= name %>", () => {
  it("renders", () => {
    // Act
    const received = shallowRender(<<%= name %> name="test" />)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
