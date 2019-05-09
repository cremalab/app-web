import { Maybe, None, Some } from "../../types/Maybe"

/**
 * maybeWrap
 * ---
 * Returns `Maybe<A>` from possibly Nil value (`undefined` | `null`)
 */

export const maybeWrap = <A>(a: A | undefined | null): Maybe<A> =>
  a === undefined || a === null ? None : Some(a)
