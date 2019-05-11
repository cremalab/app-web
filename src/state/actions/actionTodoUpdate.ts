import { ActionType } from "../../types/ActionType"
import { makeActionCreator } from "../../utils/makeActionCreator"
import { EntityTodo } from "../../types/EntityTodo"
import { Update } from "../../types/Update"
import { TaggedActionOfActionCreator } from "../../types/TaggedActionOfActionCreator"

export const actionTodoUpdate = makeActionCreator(
  ActionType.TodoUpdate,
  (
    id: Update<EntityTodo>["id"],
    properties: Update<EntityTodo>["properties"],
  ): Update<EntityTodo> => ({
    id,
    properties,
  }),
)

export type TaggedActionTodoUpdate = TaggedActionOfActionCreator<
  typeof actionTodoUpdate
>
