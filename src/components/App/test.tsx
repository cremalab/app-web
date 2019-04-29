import React from "react"
import ReactDOM from "react-dom"
import { Base as App, mapStateToProps } from "."
import { render, fireEvent, cleanup } from "react-testing-library"

afterEach(cleanup)

describe("App", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App todos={[]} addTodo={jest.fn()} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it("renders expected structure", () => {
    const { container } = render(<App todos={[]} addTodo={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it("renders todos", () => {
    const { container } = render(
      <App
        todos={[
          { id: "1", title: "Test Todo 1", complete: false },
          { id: "2", title: "Test Todo 2", complete: true },
        ]}
        addTodo={jest.fn()}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it("handles clicking of button", () => {
    // Arrange
    const onClick = jest.fn()
    const { getByText } = render(<App todos={[]} addTodo={onClick} />)

    // Act
    fireEvent.click(getByText(/Add Todo/i))

    // Assert
    expect(onClick).toHaveBeenCalled()
  })
})

describe("App mapStateToProps", () => {
  it("maps state.todos to todos prop", () => {
    expect(
      mapStateToProps({
        todos: {
          entities: {
            "1": { id: "1", title: "Test Todo", complete: false },
          },
          result: ["1"],
        },
      }),
    ).toMatchSnapshot()
  })
})
