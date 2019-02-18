---
to: src/utils/<%= name %>/test.ts
---
import { <%= name %> } from "."

describe("<%= name %>", () => {
  it("works", () => {
    // Arrange
    const valA = 1

    // Act
    const received = <%= name %>(valA)

    // Assert
    expect(received).toEqual(1)
  })
})
