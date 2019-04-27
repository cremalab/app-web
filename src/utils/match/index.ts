import { Tagged } from "../../types/Tagged"

type Cases<A extends Tagged<B>, R, B extends PropertyKey = PropertyKey> = {
  [K in A["tag"]]: A extends Tagged<K> ? (x: Tagged<K> & A) => R : never
}

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
  DefaultValue extends () => Return = () => Return
>(cases: Partial<Cases<TaggedUnion, Return, Tag>>, caseDefault?: DefaultValue) {
  return (v?: TaggedUnion): unknown => {
    const c = v ? cases[v.tag] : undefined
    return c && v ? c(v) : caseDefault ? caseDefault() : undefined
  }
}
