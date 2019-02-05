---
to: src/components/<%= name %>/stories.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
import { storiesOf } from "@storybook/react"
import React from "react"
import { <%= connected ? `${nameBase} as ${name}` : name %> } from "."

storiesOf("<%= name %>", module).add("default", () => <<%= name %>><%= name %></<%= name %>>)
