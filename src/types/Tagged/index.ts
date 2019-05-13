/**
 * # Tagged
 *
 * - Interface: Represents a member of a Tagged Union
 * - Constructor: Returns a `Tagged<Tag, Data>`
 **/

export interface Tagged<Tag extends PropertyKey, Data> {
  tag: Tag
  data: Data
}

/**
 * # Tagged
 *
 * - Interface: Represents a member of a Tagged Union
 * - Constructor: Returns a `Tagged<Tag, Data>`
 **/

export const Tagged = <Tag extends PropertyKey, Data>(
  tag: Tag,
  data: Data,
): Tagged<Tag, Data> => ({ tag, data })
