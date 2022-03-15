---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import decoratorCentered from "@storybook/addon-centered"
import { <%= name %> } from "./<%= name %>"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "<%= name %>",
  decorators: [decoratorCentered],
}

<% if(withExample) { -%>
export const Example = () => <<%= name %> name="<%= name %>" />
<% } else { -%>
export const Example = () => <<%= name %> />
<% } -%>
