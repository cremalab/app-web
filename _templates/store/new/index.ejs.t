---
to: src/store/index.ts
---
import { configureStore } from "@reduxjs/toolkit"
<% if(useThunk) { -%>
import thunkMiddleware from "redux-thunk"
<% } -%>
import { rootReducer } from "./reducers"

export const store = configureStore({
  reducer: rootReducer,
  <% if(useThunk) { -%>
  middleware: [thunkMiddleware]
  <% } -%>
});
