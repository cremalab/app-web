export interface Tagged<Tag extends PropertyKey, Data> {
  tag: Tag
  data: Data
}
