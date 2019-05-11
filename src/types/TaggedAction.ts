import { Action as ReduxAction } from "./Action"
import { Tagged } from "./Tagged"

export interface TaggedAction<
  Type extends PropertyKey,
  Action extends ReduxAction<Type, unknown>
> extends Tagged<Type, Action> {}
