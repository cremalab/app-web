import { Entity } from "./Entity"
import { Omit } from "./Omit"

export interface Update<A extends Entity> {
  id: A["id"]
  properties: Partial<Omit<A, "id">>
}
