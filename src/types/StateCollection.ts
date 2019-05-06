import { Entity } from "./Entity"

export interface StateCollection<A extends Entity> {
  entities: { [key: string]: A }
  result: readonly Entity["id"][]
}
