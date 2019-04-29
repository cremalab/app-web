import { Entity } from "./Entity"
import { Todo } from "./Todo"

/**
 * EntityThing - Entity and Thing
 * ------------------------------------------------
 * Must have id, height, width properties defined
 */

export interface EntityTodo extends Entity, Todo {}
