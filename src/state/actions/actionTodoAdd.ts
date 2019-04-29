import { ActionType } from "../../types/ActionType"
import { makeActionCreator } from "../../utils/makeActionCreator"
import { EntityTodo } from "../../types/EntityTodo"

export const actionTodoAdd = makeActionCreator<EntityTodo>(ActionType.TodoAdd)
export type ActionTodoAdd = ReturnType<typeof actionTodoAdd>
