---
to: src/store/<%= name %>/index.ts
---
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

<% if(useExample) { -%>
export type <%= h.capitalize(name) %>State = {
  counter: number
}
<% } else { -%>
export type <%= h.capitalize(name) %>State = {}
<% } -%>

<% if(useExample) { -%>
export const initialState: <%= h.capitalize(name) %>State = {
  counter: 0
}
<% } else { -%>
export const initialState: <%= h.capitalize(name) %>State = {}
<% } -%>


const { actions, reducer } = createSlice({
  name: "<%= name %>",
  initialState,
  reducers: {
    <% if(useExample) { -%>
    add: (state, action: PayloadAction<number>) => ({
      counter: state.counter + action.payload,
    }),
    subtract: (state, action: PayloadAction<number>) => ({
      counter: state.counter - action.payload,
    }),
    <% } -%>
    reset: () => initialState,
  },
})

export { actions, reducer }
