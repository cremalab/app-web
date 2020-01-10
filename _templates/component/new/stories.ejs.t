---
to: src/components/<%= name %>/stories.tsx
---
import React from "react"
import decoratorCentered from "@storybook/addon-centered"
import { <%= name %> } from "."

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "<%= name %>",
  decorators: [decoratorCentered],
}

export const example = () => <<%= name %> name="<%= name %>" />
