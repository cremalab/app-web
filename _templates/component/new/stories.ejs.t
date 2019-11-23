---
to: src/components/<%= name %>/stories.tsx
---
import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { <%= name %> } from "."
import { storiesOf } from "@storybook/react"

storiesOf("<%= name %>", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <<%= name %> name="<%= name %>" />)
