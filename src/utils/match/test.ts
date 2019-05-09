import { match } from "."
import { Maybe, MaybeTag, Some } from "../../types/Maybe"

interface User {
  name: string
}

describe("match", () => {
  it("matches a Tagged member", () => {
    // Arrange
    const user = Some({ name: "Rob" })
    // Act
    const received = match<Maybe<User>, string>(
      {
        [MaybeTag.None]: x => x.type,
        [MaybeTag.Some]: x => x.data.name,
      },
      user,
    )
    // Assert
    expect(received).toEqual(user.data.name)
  })
})
