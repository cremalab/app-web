import { Id } from "./Id"
import { EntityTodo } from "./EntityTodo"

export interface State {
  todos: {
    entities: { [key: string]: EntityTodo }
    result: readonly Id[]
  }
}
