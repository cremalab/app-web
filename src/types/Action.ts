import { Tagged } from "./Tagged"
import { ActionType } from "./ActionType"

export interface Action<Payload = null, Type extends PropertyKey = ActionType>
  extends Tagged<Type> {
  payload: Payload
}
