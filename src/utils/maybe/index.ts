import { Maybe, None, Some } from "../../types/Maybe"

/**
 * maybe
 * ---
 * Returns `Maybe<A>` from possibly Nil value (`undefined` | `null`)
 */

export const maybe = <A>(a?: A | undefined | null): Maybe<A> =>
  a === undefined || a === null ? None : Some(a)
