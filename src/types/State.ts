import { EntityTodo } from "./EntityTodo"
import { StateCollection } from "./StateCollection"

export interface State {
  todos: StateCollection<EntityTodo>
}
