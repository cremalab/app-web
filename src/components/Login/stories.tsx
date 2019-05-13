import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Login } from "."

storiesOf("Login", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <Login />)
