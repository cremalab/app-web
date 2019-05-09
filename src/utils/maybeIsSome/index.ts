import { Maybe, MaybeTag } from "../../types/Maybe"
import { match } from "../match"

/**
 * maybeIsSome
 * ---
 * Takes a `Maybe` value (`A`) and returns `true` if it contains a value and `false` if it does not.
 */

export const maybeIsSome = <A>(a: Maybe<A>) =>
  match<Maybe<A>, boolean>(
    {
      [MaybeTag.Some]: () => true,
      [MaybeTag.None]: () => false,
    },
    a,
  )
