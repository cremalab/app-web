import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { State } from "../types/State"
import { reducerTodos } from "./reducers/reducerTodos"

export const reducer = combineReducers<State>({
  todos: reducerTodos,
})

export const stateInitial = reducer(undefined, { type: "NOOP" })

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
)
