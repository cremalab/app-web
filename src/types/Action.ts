import { Tagged } from "./Tagged"
import { ActionType } from "./ActionType"

export interface Action<Type extends PropertyKey = ActionType, Payload = null>
  extends Tagged<Type> {
  payload: Payload
}
