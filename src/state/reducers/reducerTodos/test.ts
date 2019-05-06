import { actionTodoAdd } from "../../actions/actionTodoAdd"
import { reducerTodos } from "."
import { actionTodoRemove } from "../../actions/actionTodoRemove"
import { State } from "../../../types/State"
import { actionTodoUpdate } from "../../actions/actionTodoUpdate"

describe("reducerTodos", () => {
  it("handles actionTodoAdd", () => {
    // Arrange
    const stateInitial = undefined

    // Act
    const received = reducerTodos(
      stateInitial,
      actionTodoAdd({ id: "1", title: "Test Todo", complete: true }),
    )

    // Assert
    expect(received).toMatchSnapshot()
  })

  it("handles actionTodoRemove", () => {
    // Arrange
    const stateInitial: State["todos"] = {
      entities: {
        "1": { id: "1", title: "Test Todo", complete: true },
        "2": { id: "2", title: "Test Todo", complete: true },
      },
      result: ["1", "2"],
    }

    // Act
    const received = reducerTodos(stateInitial, actionTodoRemove("1"))

    // Assert
    expect(received).toMatchSnapshot()
  })

  it("handles actionTodoUpdate", () => {
    // Arrange
    const stateInitial: State["todos"] = {
      entities: {
        "1": { id: "1", title: "Test Todo", complete: true },
        "2": { id: "2", title: "Test Todo", complete: true },
      },
      result: ["1", "2"],
    }

    // Act
    const received = reducerTodos(
      stateInitial,
      actionTodoUpdate("2", { title: "I've changed" }),
    )

    // Assert
    expect(received).toMatchSnapshot()
  })
})
