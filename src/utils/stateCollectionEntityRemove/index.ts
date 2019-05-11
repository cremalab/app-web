import { Entity } from "../../types/Entity"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"

/**
 * `stateCollectionEntityRemove`
 * ------------------
 * Removes `Entity<A>` from `StateCollection<Entity<A>>`
 **/

export const stateCollectionEntityRemove = <
  A extends Entity,
  State extends StateCollection<A>
>(
  state: State,
) => ({ payload }: Action<any, A["id"]>) =>
  state.result.reduce<StateCollection<A>>(
    (a, b) =>
      b !== payload
        ? {
            entities: { ...a.entities, [b]: state.entities[b] },
            result: [...a.result, b],
          }
        : a,
    {
      entities: {},
      result: [],
    },
  )
