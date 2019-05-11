export interface Tagged<Tag extends PropertyKey, Data> {
  tag: Tag
  data: Data
}

export function Tagged<Tag extends PropertyKey, Data>(tag: Tag, data: Data) {
  return {
    tag,
    data,
  }
}
