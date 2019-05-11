import { ActionType } from "../../types/ActionType"
import { actionCreator } from "../../utils/actionCreator"
import { EntityTodo } from "../../types/EntityTodo"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"

export const actionTodoAdd = actionCreator(
  ActionType.TodoAdd,
  (a: EntityTodo) => a,
)

export type TaggedActionTodoAdd = TaggedActionOfActionCreator<
  typeof actionTodoAdd
>
