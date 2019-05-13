import { matchOr } from "."
import { Maybe } from "../../types/Maybe"

interface User {
  name: string
}

const user: User = { name: "Jeff" }

describe("matchOr", () => {
  it("handles matching case", () => {
    // Arrange
    const value = Maybe(user)
    // Act
    const received = matchOr<Maybe<User>, string>(
      {
        [Maybe.Tag.Some]: x => x.name,
      },
      "This user doesn't exist",
      value,
    )
    // Assert
    expect(received).toEqual("Jeff")
  })

  it("handles non-matching with caseDefault", () => {
    // Arrange
    const value = Maybe<User>(undefined)
    // Act
    const received = matchOr<Maybe<User>, string>(
      {
        [Maybe.Tag.Some]: x => x.name,
      },
      "This user doesn't exist",
      value,
    )
    // Assert
    expect(received).toEqual("This user doesn't exist")
  })
})
