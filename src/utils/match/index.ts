import { Tagged } from "../../types/Tagged"

export type Cases<
  A extends Tagged<B>,
  R,
  B extends PropertyKey = PropertyKey
> = { [K in A["type"]]: A extends Tagged<K> ? (x: Tagged<K> & A) => R : never }

export function match<
  TaggedUnion extends Tagged<Tag>,
  Return,
  Tag extends PropertyKey = PropertyKey
>(cases: Cases<TaggedUnion, Return, Tag>): (v: TaggedUnion) => Return

export function match<
  TaggedUnion extends Tagged<Tag>,
  Return,
  Tag extends PropertyKey = PropertyKey,
  CaseDefault extends () => Return = () => Return
>(
  cases: Partial<Cases<TaggedUnion, Return, Tag>>,
  caseDefault: CaseDefault,
): (v?: TaggedUnion) => Return

export function match<
  TaggedUnion extends Tagged<Tag>,
  Return,
  Tag extends PropertyKey = PropertyKey,
  CaseDefault extends () => Return = () => Return
>(cases: Partial<Cases<TaggedUnion, Return, Tag>>, caseDefault?: CaseDefault) {
  return (v?: TaggedUnion): unknown => {
    const c = v ? cases[v.type] : undefined
    return c && v
      ? c(v)
      : caseDefault && typeof caseDefault === "function"
      ? caseDefault()
      : undefined
  }
}
