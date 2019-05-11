// import { Reducer } from "redux"
import { matchOr } from "../matchOr"
import { Cases } from "../../types/Cases"
import { Action } from "../../types/Action"
import { Tagged } from "../../types/Tagged"

export type MakeReducerCases<
  State,
  E extends Tagged<C, B>,
  C extends PropertyKey = PropertyKey,
  D = unknown,
  B extends Action<C, D> = Action<C, D>
> = (state: State, stateInitial: State) => Cases<E, State>

export function makeReducer<
  State,
  E extends Tagged<C, B>,
  C extends PropertyKey = PropertyKey,
  D = unknown,
  B extends Action<C, D> = Action<C, D>
>(
  makeReducerCases: (state: State, stateInitial: State) => Cases<E, State>,
  initialState: State,
) {
  return (state: State = initialState, action: B) => {
    const cases = makeReducerCases(state, initialState)
    return matchOr<Tagged<C, B>, State>(cases, state, {
      tag: action.type,
      data: action,
    })
  }
}
