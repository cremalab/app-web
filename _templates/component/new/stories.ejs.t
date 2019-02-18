---
to: src/components/<%= name %>/stories.tsx
---
<% const nameBase = connected ? name + "Base" : name -%>
import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { <%= connected ? `${nameBase} as ${name}` : name %> } from "."

storiesOf("<%= name %>", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <<%= name %>><%= name %></<%= name %>>)
