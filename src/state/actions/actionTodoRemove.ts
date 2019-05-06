import { ActionType } from "../../types/ActionType"
import { makeActionCreator } from "../../utils/makeActionCreator"
import { EntityTodo } from "../../types/EntityTodo"

export const actionTodoRemove = makeActionCreator(
  ActionType.TodoRemove,
  (a: EntityTodo["id"]) => a,
)

export type ActionTodoRemove = ReturnType<typeof actionTodoRemove>
