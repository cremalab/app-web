import { makeReducer, MakeReducerCases } from "."
import { makeActionCreator } from "../makeActionCreator"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"
import { Action } from "../../types/Action"

interface User {
  name: string
}

enum ActionType {
  Add = "Add",
  Remove = "Remove",
  Update = "Update",
}

const actionUserAdd = makeActionCreator(ActionType.Add, (x: User) => x)
type ActionUserAdd = TaggedActionOfActionCreator<typeof actionUserAdd>

const actionUserRemove = makeActionCreator(
  ActionType.Remove,
  (id: string) => id,
)
type ActionUserRemove = TaggedActionOfActionCreator<typeof actionUserRemove>

const actionUserUpdate = makeActionCreator(ActionType.Update)

type TaggedAction = ActionUserAdd | ActionUserRemove
type State = ReadonlyArray<User>

describe("makeReducer makes reducer that", () => {
  // Arrange
  const initialState: State = []
  const makeReducerCases: MakeReducerCases<State, TaggedAction> = s => ({
    [ActionType.Add]: ({ payload }) => [...s, payload],
    [ActionType.Remove]: ({ payload }) => s.filter(x => x.name !== payload),
  })
  const reducerUser = makeReducer(makeReducerCases, initialState)

  it("returns next state when applied to previous state and action", () => {
    // Act
    const received = reducerUser([], actionUserAdd({ name: "Jeff" }))

    // Assert
    expect(received).toEqual([{ name: "Jeff" }])
  })

  it("returns previous state when applied to non-matching action", () => {
    // Act
    const received = reducerUser([], (actionUserUpdate() as unknown) as Action<
      any,
      any
    >)

    // Assert
    expect(received).toEqual([])
  })

  it("returns initial state when applied to undefined and non-matching action", () => {
    // Act
    const received = reducerUser(
      undefined,
      (actionUserUpdate() as unknown) as Action<any, any>,
    )

    // Assert
    expect(received).toEqual([])
  })

  it("returns next state when applied to undefined and matching action", () => {
    // Act
    const received = reducerUser(undefined, actionUserAdd({ name: "Jeff" }))

    // Assert
    expect(received).toEqual([{ name: "Jeff" }])
  })
})
