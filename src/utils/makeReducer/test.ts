import { makeReducer, MakeReducerCases } from "."
import { Tagged } from "../../types/Tagged"

interface User {
  name: string
}

enum ActionType {
  Add = "Add",
  Remove = "Remove",
  Update = "Update",
}

interface ActionUserAdd extends Tagged<ActionType.Add> {
  payload: User
}

const ActionUserAdd = (payload: User): ActionUserAdd => ({
  type: ActionType.Add,
  payload,
})

interface ActionUserRemove extends Tagged<ActionType.Remove> {
  payload: string
}

interface ActionUserUpdate extends Tagged<ActionType.Update> {}
const ActionUserUpdate = (): ActionUserUpdate => ({ type: ActionType.Update })

type Action = ActionUserAdd | ActionUserRemove
type State = ReadonlyArray<User>

describe("makeReducer makes reducer that", () => {
  // Arrange
  const initialState: State = []
  const makeReducerCases: MakeReducerCases<State, Action> = s => ({
    [ActionType.Add]: ({ payload }) => [...s, payload],
    [ActionType.Remove]: ({ payload }) => s.filter(x => x.name !== payload),
  })
  const reducerUser = makeReducer(makeReducerCases, initialState)

  it("returns next state when applied to previous state and action", () => {
    // Act
    const received = reducerUser([], ActionUserAdd({ name: "Jeff" }))

    // Assert
    expect(received).toEqual([{ name: "Jeff" }])
  })

  it("returns previous state when applied to non-matching action", () => {
    // Act
    const received = reducerUser([], (ActionUserUpdate() as unknown) as Action)

    // Assert
    expect(received).toEqual([])
  })

  it("returns initial state when applied to undefined and non-matching action", () => {
    // Act
    const received = reducerUser(
      undefined,
      (ActionUserUpdate() as unknown) as Action,
    )

    // Assert
    expect(received).toEqual([])
  })

  it("returns next state when applied to undefined and matching action", () => {
    // Act
    const received = reducerUser(undefined, ActionUserAdd({ name: "Jeff" }))

    // Assert
    expect(received).toEqual([{ name: "Jeff" }])
  })
})
