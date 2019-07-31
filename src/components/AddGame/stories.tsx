import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { AddGame } from "."

storiesOf("AddGame", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <AddGame>AddGame</AddGame>)
