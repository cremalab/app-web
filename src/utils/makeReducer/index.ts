import { Tagged } from "../../types/Tagged"
import { Reducer } from "redux"
import { matchOr } from "../matchOr"
import { Cases } from "../../types/Cases"

export type MakeReducerCases<S, A extends Tagged> = (
  state: S,
  stateInitial: S,
) => Cases<A, S>

export const makeReducer = <S, A extends Tagged>(
  makeReducerCases: MakeReducerCases<S, A>,
  initialState: S,
): Reducer<S, A> => (state = initialState, action) => {
  const cases = makeReducerCases(state, initialState)
  return matchOr<A, S>(cases, state, action)
}
