import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { LoginWithFormik } from "."

storiesOf("Login", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <LoginWithFormik> </LoginWithFormik>)
