import { Maybe, MaybeTag } from "../../types/Maybe"
import { match } from "../match"

/**
 * maybeUnwrap
 * ---
 * Returns `A` from `Maybe<A>` OR the default value of type `A` (`None`).
 */

export const maybeUnwrap = <A>(a: Maybe<A>, b: A): A =>
  match<Maybe<A>, A>(
    {
      [MaybeTag.Some]: x => x.data,
      [MaybeTag.None]: () => b,
    },
    a,
  )
