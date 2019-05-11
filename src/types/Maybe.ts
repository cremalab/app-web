import { Tagged } from "./Tagged"
import { tagged } from "../utils/tagged"

export enum MaybeTag {
  None = "None",
  Some = "Some",
}

interface None extends Tagged<MaybeTag.None, undefined> {}
interface Some<A> extends Tagged<MaybeTag.Some, A> {}
export type Maybe<A> = None | Some<A>

export const None: None = tagged(MaybeTag.None, undefined)
export const Some = <A>(a: A): Some<A> => tagged(MaybeTag.Some, a)
