import { Entity } from "./Entity"
import { Thing } from "./Thing"

/**
 * EntityThing - Entity and Thing
 * ------------------------------------------------
 * Must have id, height, width properties defined
 */

export interface EntityThing extends Entity, Thing {}
