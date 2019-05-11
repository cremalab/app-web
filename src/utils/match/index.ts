import { Cases } from "../../types/Cases"
import { Tagged } from "../../types/Tagged"

// tslint:disable: jsdoc-format
/**
 * match
 * ---
 * Takes a `Cases` object, and the value to match against. Returns value from each case.
 *
 * Example:
 ```
const user = None
match<Maybe<User>, string>(
  {
    [MaybeTag.Some]: x => x.data.name,
    [MaybeTag.None]: () => "This user doesn't exist" 
  },
  user
) // "This user doesn't exist"
```
 */

export function match<
  TaggedUnion extends Tagged<Tag, unknown>,
  Return,
  Tag extends PropertyKey = PropertyKey
>(cases: Cases<TaggedUnion, Return, Tag>, value: TaggedUnion): Return {
  return cases[value.tag](value.data)
}
