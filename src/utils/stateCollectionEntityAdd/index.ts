import { Entity } from "../../types/Entity"
import { StateCollection } from "../../types/StateCollection"
import { Action } from "../../types/Action"

/**
 * `stateCollectionEntityAdd`
 * ------------------
 * Adds `Entity<A>` to `StateCollection<Entity<A>>`
 **/

export const stateCollectionEntityAdd = <A extends Entity>(
  state: StateCollection<A>,
) => ({ payload }: Action<A>): StateCollection<A> => ({
  entities: { ...state.entities, [payload.id]: payload },
  result: [...state.result, payload.id],
})
