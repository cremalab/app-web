import { Entity } from "./Entity"
import { Todo } from "./Todo"

/**
 * EntityTodo - Entity & Todo
 * ------------------------------------------------
 * A Todo with an ID
 */

export interface EntityTodo extends Entity, Todo {}
