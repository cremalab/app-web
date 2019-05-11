import { matchOr } from "."
import { Maybe, MaybeTag, None, Some } from "../../types/Maybe"

interface User {
  name: string
}

describe("matchOr", () => {
  it("handles matching case", () => {
    // Arrange
    const user = Some({ name: "Jeff" })
    // Act
    const received = matchOr<Maybe<User>, string>(
      {
        [MaybeTag.Some]: x => x.name,
      },
      "This user doesn't exist",
      user,
    )
    // Assert
    expect(received).toEqual("Jeff")
  })

  it("handles non-matching with caseDefault", () => {
    // Arrange
    const user = None
    // Act
    const received = matchOr<Maybe<User>, string>(
      {
        [MaybeTag.Some]: x => x.name,
      },
      "This user doesn't exist",
      user,
    )
    // Assert
    expect(received).toEqual("This user doesn't exist")
  })
})
