import { Tagged } from "./Tagged"

export enum MaybeTag {
  None = "None",
  Some = "Some",
}

interface None extends Tagged<MaybeTag.None, undefined> {}
interface Some<A> extends Tagged<MaybeTag.Some, A> {}
export type Maybe<A> = None | Some<A>

export const None = Tagged(MaybeTag.None, undefined)
export const Some = <A>(a: A) => Tagged(MaybeTag.Some, a)
