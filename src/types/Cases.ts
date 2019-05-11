import { Tagged } from "./Tagged"

export type Cases<
  A extends Tagged<Tag, unknown>,
  Return,
  Tag extends PropertyKey = PropertyKey
> = {
  [K in A["tag"]]: A extends Tagged<K, infer Data> ? (x: Data) => Return : never
}
