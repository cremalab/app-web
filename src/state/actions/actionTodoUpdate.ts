import { ActionType } from "../../types/ActionType"
import { actionCreator } from "../../utils/actionCreator"
import { EntityTodo } from "../../types/EntityTodo"
import { UpdateEntity } from "../../types/Update"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"

export const actionTodoUpdate = actionCreator(
  ActionType.TodoUpdate,
  (
    id: UpdateEntity<EntityTodo>["id"],
    properties: UpdateEntity<EntityTodo>["properties"],
  ): UpdateEntity<EntityTodo> => ({
    id,
    properties,
  }),
)

export type TaggedActionTodoUpdate = TaggedActionOfActionCreator<
  typeof actionTodoUpdate
>
