import { Action as ReduxAction } from "redux"

/**
 * `Action`
 * ---------------------------------------------
 * Extends redux `Action` adding `payload`
 */

export interface Action<Type extends PropertyKey, Payload>
  extends ReduxAction<Type> {
  payload: Payload
}

/**
 * `Action`
 * ------------------
 * Returns a `Tagged<Tag, Data>`
 **/

export const Action = <Type extends PropertyKey, Payload>(
  type: Type,
  payload: Payload,
): Action<Type, Payload> => ({
  type,
  payload,
})
