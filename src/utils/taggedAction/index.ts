import { TaggedAction } from "../../types/TaggedAction"
import { Action as ReduxAction } from "../../types/Action"
import { tagged } from "../tagged"

/**
 * `taggedAction`
 * ------------------
 * Returns a `TaggedAction<Type, Payload>`
 **/

export const taggedAction = <
  Type extends PropertyKey,
  Action extends ReduxAction<Type, Payload>,
  Payload = unknown
>(
  action: Action,
): TaggedAction<Type, Action> => tagged(action.type, action)
