---
to: src/utils/<%= name %>/test.ts
---
import { <%= name %> } from "."
describe("<%= name %>", () => {
  it("returns undefined", () => {
    const received = <%= name %>()
    expect(received).toBe(undefined)
  })
})
