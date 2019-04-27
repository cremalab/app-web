import { match } from "."
import { Maybe, MaybeTag, Some, None } from "../../types/Maybe"

interface User {
  name: string
}

describe("match", () => {
  describe("with all cases", () => {
    // Arrange
    const matchUser = match<Maybe<User>, string>({
      [MaybeTag.None]: x => x.tag,
      [MaybeTag.Some]: x => x.data.name,
    })

    it("matches a Tagged member", () => {
      // Arrange
      const user = Some({ name: "Rob" })

      // Assert
      expect(matchUser(user)).toEqual(user.data.name)
    })
  })

  describe("with caseDefault", () => {
    // Arrange
    const matchUserWithDefault = match<Maybe<User>, string>(
      {
        [MaybeTag.Some]: x => x.data.name,
      },
      () => "This user doesn't exist",
    )

    it("handles non-matching with caseDefault", () => {
      // Arrange
      const user = None

      // Assert
      expect(matchUserWithDefault(user)).toEqual("This user doesn't exist")
    })

    it("handles undefined with caseDefault", () => {
      // Arrange
      const user = undefined

      // Assert
      expect(matchUserWithDefault(user)).toEqual("This user doesn't exist")
    })
  })
})
