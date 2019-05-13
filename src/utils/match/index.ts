import { Cases } from "../../types/Cases"
import { Tagged } from "../../types/Tagged"

// tslint:disable: jsdoc-format
/**
 * # match
 * 
 * Matches each `Tagged` member of a Tagged Union exhaustively. 
 * 
 * For example, `Maybe<A>` is an alias for the union of `Some<A>` and `None`, each of 
 * which extends 
 * 
 * Matches against each member in a Tagged Union exhaustively. For example, if a 
 * value is wrapped in a `Maybe<A>` (an alias for a Tagged Union of `Some<A>` and `None`), 
 * a type used to represent a value that may or may not exist, `match` lets us safely 
 * access the value if it does exist and requires us to explicitly handle the case where 
 * it does not.
 *
 * ## Usage Example
 ```
const user = None
match<Maybe<User>, string>(
  {
    [MaybeTag.Some]: x => x.name,
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
