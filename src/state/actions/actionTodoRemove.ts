import { ActionType } from "../../types/ActionType"
import { actionCreator } from "../../utils/actionCreator"
import { EntityTodo } from "../../types/EntityTodo"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"

export const actionTodoRemove = actionCreator(
  ActionType.TodoRemove,
  (a: EntityTodo["id"]) => a,
)

export type TaggedActionTodoRemove = TaggedActionOfActionCreator<
  typeof actionTodoRemove
>
