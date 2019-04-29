import { match } from "."
import { Maybe, MaybeTag, Some, None } from "../../types/Maybe"

interface User {
  name: string
}

describe("match", () => {
  describe("with all cases", () => {
    // Arrange
    const matchUser = match<Maybe<User>, string>({
      [MaybeTag.None]: x => x.type,
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

  describe("massive misuse", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const matchUnsafe = match as (...args: any[]) => any

    it("wrong types 1", () => {
      // Arrange
      const value = undefined
      // Act
      const match = matchUnsafe(undefined, undefined)
      // Assert
      expect(match(value)).toEqual(undefined)
    })

    it("wrong types 2", () => {
      // Arrange
      const value = undefined
      // Act
      const match = matchUnsafe({}, undefined)
      // Assert
      expect(match(value)).toEqual(undefined)
    })

    it("wrong types 3", () => {
      // Arrange
      const value = 1
      // Act
      const match = matchUnsafe(1, 1)
      // Assert
      expect(match(value)).toEqual(undefined)
    })

    it("wrong types 4", () => {
      // Arrange
      const value = {}
      // Act
      const match = matchUnsafe(() => 2)
      // Assert
      expect(match(value)).toEqual(undefined)
    })
  })
})
