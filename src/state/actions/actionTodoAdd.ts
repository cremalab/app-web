import { ActionType } from "../../types/ActionType"
import { makeActionCreator } from "../../utils/makeActionCreator"
import { EntityTodo } from "../../types/EntityTodo"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"

export const actionTodoAdd = makeActionCreator(
  ActionType.TodoAdd,
  (a: EntityTodo) => a,
)

export type TaggedActionTodoAdd = TaggedActionOfActionCreator<
  typeof actionTodoAdd
>
