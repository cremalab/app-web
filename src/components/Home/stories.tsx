import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Home } from "."

storiesOf("Home", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <Home />)
