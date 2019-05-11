/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action } from "../../types/Action"
import { ActionType } from "../../types/ActionType"

/**
 * `makeActionCreator`
 * ---------------------------------------------
 * Makes a Redux "Action Creator" function
 */

export type MakePayload<Args extends any[], Payload> = (
  ...args: Args
) => Payload

export const makeActionCreator = <
  Type extends PropertyKey = ActionType,
  Args extends any[] = [],
  Payload = null
>(
  type: Type,
  makePayload: MakePayload<Args, Payload> = (...x) => x[0],
) => (...args: Args): Action<Type, Payload> => ({
  type,
  payload: makePayload(...args),
})
