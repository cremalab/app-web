import { State } from "../../types/State"
import { reducerTodos } from "./reducerTodos"
import { combineReducers } from "redux"

export const reducer = combineReducers<State>({
  todos: reducerTodos,
})

export const stateInitial = reducer(undefined, { type: "NOOP" })
