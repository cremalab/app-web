import { ActionType } from "../../types/ActionType"
import { makeActionCreator } from "../../utils/makeActionCreator"
import { EntityTodo } from "../../types/EntityTodo"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"

export const actionTodoRemove = makeActionCreator(
  ActionType.TodoRemove,
  (a: EntityTodo["id"]) => a,
)

export type TaggedActionTodoRemove = TaggedActionOfActionCreator<
  typeof actionTodoRemove
>
