import { Entity } from "../../types/Entity"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"
import { Update } from "../../types/Update"

/**
 * `stateCollectionEntityUpdate`
 * ------------------
 * Updates `Entity<A>` in `StateCollection<Entity<A>>`
 **/

export const stateCollectionEntityUpdate = <
  A extends Entity,
  State extends StateCollection<A>
>(
  state: State,
) => ({ payload }: Action<Update<A>>) =>
  state.result.reduce<StateCollection<A>>(
    (a, b) =>
      b === payload.id
        ? {
            entities: {
              ...a.entities,
              [b]: { ...state.entities[b], ...payload.properties },
            },
            result: [...a.result, b],
          }
        : {
            entities: {
              ...a.entities,
              [b]: state.entities[b],
            },
            result: [...a.result, b],
          },
    {
      entities: {},
      result: [],
    },
  )
