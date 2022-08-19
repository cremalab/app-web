---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import { <%= name %> } from "./<%= name %>"
<% if(withExample) { -%>
import { ComponentStory } from "@storybook/react"
<% } -%>

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "<%= name %>",
  parameters: {
    layout: "centered"
  },
}

<% if(withExample) { -%>
const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />

export const Example = Template.bind({})

Example.args = {
  name: "<%= name %>",
}
<% } else { -%>
export const Example = () => <<%= name %> />
<% } -%>
