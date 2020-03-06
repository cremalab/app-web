---
to: src/store/<%= name %>/test.ts
---
import { actions, reducer } from "."

describe("store/<%= name %>", () => {
  <% if(useExample) { -%>
  it("adds <%= name %>", () => {
    const action = actions.add(2)
    expect(reducer(undefined, action)).toEqual({
      counter: 2
    })
  })
  it("subtracts <%= name %>", () => {
    const action = actions.subtract(3)
    expect(reducer({
      counter: 2
    }, action)).toEqual({
      counter: -1
    })
  })
  it("resets <%= name %>", () => {
    const action = actions.reset()
    expect(reducer(undefined, action)).toEqual({
      counter: 0
    })
  })
  <% } else { -%>
  it("resets <%= name %>", () => {
    const action = actions.reset()
    expect(reducer(undefined, action)).toEqual({})
  })
  <% } -%>
})
