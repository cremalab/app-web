import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Navigation } from "."

storiesOf("Navigation", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <Navigation />)
