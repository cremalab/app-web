import { match, Cases } from "../match"
import { Tagged } from "../../types/Tagged"
import { Reducer } from "redux"

export type MakeReducerCases<S, A extends Tagged> = (s: S) => Cases<A, S>

export const makeReducer = <S, A extends Tagged>(
  makeReducerCases: MakeReducerCases<S, A>,
  initialState: S,
): Reducer<S, A> => (state = initialState, action) => {
  const cases = makeReducerCases(state)
  return match<A, S>(cases, () => state)(action)
}
