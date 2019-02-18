---
to: src/utils/<%= name %>/index.ts
---
<%_ var nameCap = h.inflection.camelize(name, false);_%>
// Define
type <%= nameCap %> = <A>(a: A) => A

// Implement
export const <%= name %>: <%= nameCap %> = x => x
