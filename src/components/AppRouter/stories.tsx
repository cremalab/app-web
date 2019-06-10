import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { AppRouter } from "."

storiesOf("AppRouter", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <AppRouter />)
