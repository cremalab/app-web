/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from "../../types/Action"
import { ActionType } from "../../types/ActionType"

/**
 * `actionCreator`
 * ---------------------------------------------
 * Returns a redux action creator
 */

export const actionCreator = <
  Type extends PropertyKey = ActionType,
  Args extends any[] = [],
  Payload = undefined
>(
  type: Type,
  makePayload: (...args: Args) => Payload = (...x) => x[0],
) => (...args: Args): Action<Type, Payload> => ({
  type,
  payload: makePayload(...args),
})
