import { stateCollectionEntityAdd } from "."
import { StateCollection } from "../../types/StateCollection"
import { EntityTodo } from "../../types/EntityTodo"
import { Action } from "../../types/Action"

describe("stateCollectionEntityAdd", () => {
  it("adds `Entity<A>` to `StateCollection<Entity<A>>`", () => {
    // Arrange
    const state: StateCollection<EntityTodo> = {
      entities: {},
      result: [],
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const action: Action<EntityTodo, any> = {
      type: "ANY",
      payload: { id: "1", title: "Test Todo", complete: false },
    }

    // Act
    const received = stateCollectionEntityAdd(state)(action)

    // Assert
    expect(received).toMatchSnapshot()
  })
})
