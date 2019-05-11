import { Maybe } from "../../types/Maybe"
import { maybeReduce } from "../maybeReduce"

/**
 * maybeUnwrap
 * ---
 * Returns `A` from `Maybe<A>` OR the default value of type `A` (`None`).
 */

export const maybeUnwrap = <A>(a: Maybe<A>, b: A): A =>
  maybeReduce(x => x, b, a)
