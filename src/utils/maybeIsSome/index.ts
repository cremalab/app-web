import { Maybe } from "../../types/Maybe"
import { maybeReduce } from "../maybeReduce"

/**
 * maybeIsSome
 * ---
 * Takes a `Maybe` value (`A`) and returns `true` if it contains a value and `false` if it does not.
 */

export const maybeIsSome = <A>(a: Maybe<A>) => maybeReduce(() => true, false, a)
