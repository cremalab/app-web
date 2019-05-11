import { Action } from "redux"

export interface Action<Type extends PropertyKey, Payload>
  extends Action<Type> {
  payload: Payload
}
