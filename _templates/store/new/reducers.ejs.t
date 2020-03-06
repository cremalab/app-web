---
to: src/store/reducers.ts
---
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  // Reducers
})
export type RootState = ReturnType<typeof rootReducer>