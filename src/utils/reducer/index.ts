import { matchOr } from "../matchOr"
import { Cases } from "../../types/Cases"
import { Action } from "../../types/Action"
import { Tagged } from "../../types/Tagged"

export type ReducerCases<
  State,
  TaggedUnion extends Tagged<Tag, Data>,
  Tag extends PropertyKey = PropertyKey,
  Payload = unknown,
  Data extends Action<Tag, Payload> = Action<Tag, Payload>
> = (state: State, stateInitial: State) => Cases<TaggedUnion, State>

export function reducer<
  State,
  TaggedUnion extends Tagged<Tag, Data>,
  Tag extends PropertyKey = PropertyKey,
  Payload = unknown,
  Data extends Action<Tag, Payload> = Action<Tag, Payload>
>(reducerCases: ReducerCases<State, TaggedUnion>, initialState: State) {
  return (state: State = initialState, action: Data) => {
    const cases = reducerCases(state, initialState)
    return matchOr<Tagged<Tag, Data>, State>(cases, state, {
      tag: action.type,
      data: action,
    })
  }
}
