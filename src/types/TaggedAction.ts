import { Action as ReduxAction } from "./Action"
import { Tagged } from "./Tagged"

export interface TaggedAction<
  Type extends PropertyKey,
  Action extends ReduxAction<Type, unknown>
> extends Tagged<Type, Action> {}

export const TaggedAction = <
  Type extends PropertyKey,
  Action extends ReduxAction<Type, Payload>,
  Payload = unknown
>(
  action: Action,
): TaggedAction<Type, Action> => Tagged(action.type, action)
