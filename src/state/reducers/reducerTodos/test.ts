import { actionTodoAdd } from "../../actions/actionTodoAdd"
import { reducerTodos } from "."

describe("reducerTodos", () => {
  it("handles actionTodoAdd", () => {
    expect(
      reducerTodos(
        undefined,
        actionTodoAdd({ id: "1", title: "Test Todo", complete: true }),
      ),
    ).toMatchSnapshot()
  })
})
