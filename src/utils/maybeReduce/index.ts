import { Maybe, MaybeTag } from "../../types/Maybe"
import { match } from "../match"

/**
 * maybeReduce
 * ---
 * Takes a `Maybe` value (`A`) and returns a value (`B`) of ANY type.
 */

export const maybeReduce = <A, B>(a: (e: A) => B, b: B, c: Maybe<A>) =>
  match<Maybe<A>, B>(
    {
      [MaybeTag.Some]: x => a(x.data),
      [MaybeTag.None]: () => b,
    },
    c,
  )
