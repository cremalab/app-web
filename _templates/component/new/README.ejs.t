---
to: src/components/<%= name %>/README.md
---
# `<<%= name %> />`

DESCRIPTION_HERE

## Example

![<%= name %>](../../../.loki/reference/chrome_<%= name %>_default.png)

> Image location: [`.loki/reference/chrome_<%= name %>_default.png`](../../../.loki/reference/chrome_<%= name %>_default.png)
> 
> To regenerate: 
> 1. `npm run test:playground` (skip if running)
> 1. `npm run test:visual:update -- --storiesFilter="^<%= name %> default\$"`