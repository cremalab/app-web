/* eslint-disable @typescript-eslint/no-explicit-any */
import { reducer, ReducerCases } from "."
import { actionCreator } from "../actionCreator"
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

const actionUserAdd = actionCreator(ActionType.Add, (x: User) => x)
type ActionUserAdd = TaggedActionOfActionCreator<typeof actionUserAdd>

const actionUserRemove = actionCreator(ActionType.Remove, (id: string) => id)
type ActionUserRemove = TaggedActionOfActionCreator<typeof actionUserRemove>

const actionUserUpdate = actionCreator(ActionType.Update)

type TaggedAction = ActionUserAdd | ActionUserRemove
type State = ReadonlyArray<User>

describe("makeReducer makes reducer that", () => {
  // Arrange
  const initialState: State = []
  const makeReducerCases: ReducerCases<State, TaggedAction> = s => ({
    [ActionType.Add]: ({ payload }) => [...s, payload],
    [ActionType.Remove]: ({ payload }) => s.filter(x => x.name !== payload),
  })
  const reducerUser = reducer(makeReducerCases, initialState)

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
