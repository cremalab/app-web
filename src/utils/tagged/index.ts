import { Tagged } from "../../types/Tagged"

/**
 * `tagged`
 * ------------------
 * Returns a `Tagged<Tag, Data>`
 **/

export function tagged<Tag extends PropertyKey, Data>(
  tag: Tag,
  data: Data,
): Tagged<Tag, Data> {
  return {
    tag,
    data,
  }
}
