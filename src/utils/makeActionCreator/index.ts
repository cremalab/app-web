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
  Payload = null,
  Args extends any[] = [Payload],
  Type extends ActionType = ActionType
>(
  type: Type,
  makePayload: MakePayload<Args, Payload> = (...x) => x[0],
) => (...args: Args): Action<Payload, Type> => ({
  type,
  payload: makePayload(...args),
})
