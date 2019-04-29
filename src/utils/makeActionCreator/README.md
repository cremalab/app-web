# makeActionCreator

Returns an Action Creator (a function that returns a Redux action object). The minimum requirement is to provide the Payload type argument and the actual ActionType enum member (e.g. `makeActionCreator<User>(ActionType.UserAdd)`). By default it assumes that your Action Creator will take a single argument corresponding to the `Payload` type.

To specify multiple parameters for the returned Action Creator, specify a second type argument `Args` and a second function argument with the type `(...args) => Payload`. See example 2.

> The third type parameter is defaulted to `ActionType` for easy app integration

### Usage

#### Example 1

```ts
import { makeActionCreator } from "../../utils/makeActionCreator"

export interface User {
  name: string
}

const actionUserAdd = makeActionCreator<User>(ActionType.UserAdd)
// actionUserAdd: (a: User) => { payload: a, type: "UserAdd" }

const result = actionUserAdd({ name: "Jeff" }) 
// result: { payload: { name: "Jeff" }, type: "UserAdd" }
```

#### Example 2

```ts
import { makeActionCreator } from "../../utils/makeActionCreator"

const actionSum = makeActionCreator<number, [number, number] /* Args */>(
  ActionType.Sum,
  (a, b) => a + b, // map `Args` to `Payload`
)
// actionUserAdd: (a: User) => { payload: a, type: "UserAdd" }

const result = actionSum(2, 3)
// result: { payload: 5, type: "Sum" }
```