# match

## Overview

Returns a function that allows for exhaustive matching on `Tagged<A>` (e.g. `Maybe<A>`).

### Example Usage

#### Exhaustive Matching

Sometimes we want to ensure we handle _every_ possible tagged member explicitly.

```ts
import { match } from "../../utils/match"
import { Maybe, MaybeTag, Some, None } from "../../types/Maybe"

interface User {
  name: string
}

type TheTaggedThing = Maybe<User> // union of Some<A> and None, both extend Tagged<A>
type TheTypeWeWantBack = string

const matchUser = match<TheTaggedThing, TheTypeWeWantBack>({
  [MaybeTag.Some]: x => x.data.name,
  [MaybeTag.None]: () => "No user here",
})

// Let's make a Some<User>
const user1 = Some({ name: "Fred" })

// Let's apply matchUser to `user1`
const result1 = matchUser(user1) // result is "Fred"

// Let's make a None...user? 🤔
const user2 = None // we got nothing

// Let's apply matchUser to `user2`
const result2 = matchUser(user2) // result is "No user here"
```

#### Non-Exhaustive Matching with `caseDefault`

Sometimes we only want to handle _some_ tagged members explicitly and just set a default for the rest of them (think of a Redux reducer function).

```ts
import { match } from "../../utils/match"
import { Tagged } from "../../types/Tagged"
import { User } from "../../types/User"

// Define Tags
export enum ActionTag {
  Add = "Add"
  Remove = "Remove"
  Update = "Update"
}

// Define and action for adding a user
export interface ActionUserAdd extends Tagged<ActionTag.Add> {
  payload: User
}

// Define and action for removing a user
export interface ActionUserRemove extends Tagged<ActionTag.Remove> {
  id: string
}

// Define and action for updating a user
export interface ActionUserUpdate extends Tagged<ActionTag.Update> {
  id: string,
  attributes: Partial<User>
}

// Define Action as the union of ActionUserAdd, ActionUserRemove, and ActionUserUpdate
export type Action = ActionUserAdd | ActionUserRemove | ActionUserUpdate

// Define our State as an array of User that can't be mutated
export type State = readonly User[]

/**
 * Define a reducer that handles some members of Action
 * and returns state by default if nothing matches (e.g. ActionTag.Update)
**/
const reducerUser = (state: State, action: Action) => 
  match<Action, State>(
    {
      [ActionTag.Add]: action => [...state, action.payload],
      [ActionTag.Remove]: action => state.filter(x => x.id !== action.payload),
      // [ActionTag.Update] isn't defined yet
    }, 
    () => state // state is returned unscathed if nothing matches
  )(action)
```
