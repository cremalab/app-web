import { Cases } from "../../types/Cases"
import { Tagged } from "../../types/Tagged"

// tslint:disable: jsdoc-format
/**
 * matchOr
 * ---
 * Takes a partial `Cases`, a default value, and the value to match against. Returns default value if no match is present.
 *
 * Example:
 ```
const user = None
matchOr<Maybe<User>, string>(
  {
    [MaybeTag.Some]: x => x.data.name,
    // [MaybeTag.None]: () => "This user doesn't exist" 
    // 👆 partial because `Cases` lacks `None`
  },
  "This user doesn't exist",
  user
) // "This user doesn't exist"
```
 */

export function matchOr<
  TaggedUnion extends Tagged<Tag>,
  Return,
  Tag extends PropertyKey = PropertyKey,
  CaseDefault extends Return = Return
>(
  cases: Partial<Cases<TaggedUnion, Return, Tag>>,
  caseDefault: CaseDefault,
  value: TaggedUnion,
) {
  const c = cases[value.type]
  return c ? c(value) : caseDefault
}
