import React from "react"
import logo from "../../assets/logo.svg"
import "./index.css"
import { connect } from "react-redux"
import { EntityTodo } from "../../types/EntityTodo"
import { State } from "../../types/State"
import { actionTodoAdd } from "../../state/actions/actionTodoAdd"

type Props = Readonly<{
  todos: readonly EntityTodo[]
  addTodo: (todo: EntityTodo) => void
}>

export function Base({ todos, addTodo }: Props) {
  const todoIndex = todos.length
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Todos: {todoIndex}</p>
        <button
          onClick={() =>
            addTodo({
              id: todoIndex.toString(),
              title: `I'm Todo #${todoIndex + 1}`,
              complete: false,
            })
          }
        >
          Add Todo
        </button>
        <ul>
          {todos.map(x => (
            <li key={x.id}>
              {x.title} | {x.complete ? "Complete" : "Incomplete"}
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export const mapStateToProps = (state: State) => {
  return {
    todos: state.todos.result.map(x => state.todos.entities[x]),
  }
}

const mapDispatchToProps = {
  addTodo: actionTodoAdd,
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Base)
