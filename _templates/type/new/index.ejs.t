---
to: src/types/<%= h.inflection.camelize(name, false) %>.ts
---
<%_ var nameCap = h.inflection.camelize(name, false);_%>
/**
 * <%= nameCap %>
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export interface <%= nameCap %> {
  // key: ValueType
}
