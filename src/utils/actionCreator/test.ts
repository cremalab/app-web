import { actionCreator } from "."

export interface User {
  name: string
}

enum ActionType {
  UserAdd = "UserAdd",
  Sum = "Sum",
}

describe("actionCreator", () => {
  it("returns action creator where argument is passed as action payload", () => {
    // Arrange
    const actionItemAdd = actionCreator<ActionType.UserAdd, [User], User>(
      ActionType.UserAdd,
    )

    // Act
    const action = actionItemAdd({ name: "Jeff" })

    // Assert
    expect(action).toMatchSnapshot()
  })

  it("returns action creator where arguments are converted to payload", () => {
    // Arrange
    const sum = (a: number, b: number) => a + b
    const actionSum = actionCreator(ActionType.Sum, sum)

    // Act
    const action = actionSum(2, 3)

    // Assert
    expect(action).toMatchSnapshot()
  })
})
