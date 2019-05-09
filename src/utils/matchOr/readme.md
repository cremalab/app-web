# matchOr

Takes a partial `Cases` object, a default value, and the value to match against. Returns default value if no match is present.

Example:

```ts
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