import { Action } from "redux"

/**
 * `Action`
 * ---------------------------------------------
 * Extends redux `Action` adding `payload`
 */

export interface Action<Type extends PropertyKey, Payload>
  extends Action<Type> {
  payload: Payload
}
