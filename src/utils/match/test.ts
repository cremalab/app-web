import { match } from "."
import { Maybe } from "../../types/Maybe"

interface User {
  name: string
}

describe("match", () => {
  it("matches a Tagged member", () => {
    // Arrange
    const user = Maybe.Some({ name: "Rob" })
    // Act
    const received = match<Maybe<User>, string>(
      {
        [Maybe.Tag.Some]: x => x.name,
        [Maybe.Tag.None]: () => "yo",
      },
      user,
    )
    // Assert
    expect(received).toEqual(user.data.name)
  })
})
