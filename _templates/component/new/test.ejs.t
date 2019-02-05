---
to: src/components/<%= name %>/test.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
import { <%= connected ? `${nameBase} as ${name}` : name %> } from "."
import React from "react"
import { shallowRender } from "../../utils/shallowRender"

describe("<%= name %>", () => {
  it("renders", () => {
    const received = shallowRender(<<%= name %>><%= name %></<%= name %>>)
    expect(received).toMatchSnapshot()
  })
})
