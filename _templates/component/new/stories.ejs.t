---
to: src/components/<%= name %>/stories.tsx
---
import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { <%= name %> } from "."

storiesOf("<%= name %>", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <<%= name %> name="<%= name %>" />)
