/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from "./Action"
import { TaggedAction } from "./TaggedAction"

export type TaggedActionOfActionCreator<
  A extends (...a: any[]) => Action<any, any>
> = TaggedAction<ReturnType<A>["type"], ReturnType<A>>
