# makeReducer

Returns a Redux reducer function and enforces that the user provide initial state and exhaustively handle all action types provided.

```ts
import { State } from "../../types/State"
import { ActionUser, ActionType } from "../../types/Action"

// Define `initialState` since state might be `undefined`
const initialState: State = []

/** makeCases: 
 * A function that takes state and returns a map keyed by 
 * specific action types and who's value is a function 
 * from Action to State
 **/
const makeReducerCases: MakeReducerCases<State, ActionUser> = s => ({
  [ActionType.UserAdd]: ({ payload }) => [...s, payload],
  [ActionType.UserRemove]: ({ payload }) => s.filter(x => x.name !== payload),
})

// Put it all together and export for use in `combineReducers`
export const reducerUser = makeReducer(makeReducerCases, initialState)
```