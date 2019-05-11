import { Entity } from "./Entity"
import { Omit } from "./Omit"

export interface UpdateEntity<A extends Entity> {
  id: A["id"]
  properties: Partial<Omit<A, "id">>
}
