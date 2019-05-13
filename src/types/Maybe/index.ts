import { Tagged } from "../Tagged"
import { match } from "../../utils/match"

export enum Tag {
  None,
  Some,
}

interface Some<A> extends Tagged<Tag.Some, A> {}
interface None extends Tagged<Tag.None, null> {}
export type Maybe<A> = Some<A> | None

export const Maybe = <A>(a?: A | undefined | null): Maybe<A> =>
  a === undefined || a === null ? Maybe.None : Maybe.Some(a)

Maybe.Tag = Tag

Maybe.Some = <A>(a: A): Some<A> => Tagged(Maybe.Tag.Some, a)

Maybe.None = Tagged(Maybe.Tag.None, null) as None

Maybe.reduce = <A, B>(f: (a: A) => B, b: B, c: Maybe<A>) =>
  match<Maybe<A>, B>(
    {
      [Maybe.Tag.Some]: f,
      [Maybe.Tag.None]: () => b,
    },
    c,
  )

Maybe.map = <A, B>(f: (a: A) => B, b: Maybe<A>) =>
  Maybe.reduce<A, Maybe<B>>(x => Maybe.Some(f(x)), Maybe.None, b)

Maybe.isSome = <A>(a: Maybe<A>) => Maybe.reduce(() => true, false, a)

Maybe.isNone = <A>(a: Maybe<A>) => Maybe.reduce(() => false, true, a)

Maybe.unwrap = <A>(a: A, b: Maybe<A>): A => Maybe.reduce(x => x, a, b)
