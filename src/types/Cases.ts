import { Tagged } from "./Tagged"

export type Cases<
  A extends Tagged<B>,
  R,
  B extends PropertyKey = PropertyKey
> = { [K in A["type"]]: A extends Tagged<K> ? (x: Tagged<K> & A) => R : never }
