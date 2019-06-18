import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Navigation } from "."
import { BrowserRouter as Router } from "react-router-dom"

storiesOf("Navigation", module)
  .addDecorator(decoratorCentered)
  .add("default", () => (
    <Router>
      <Navigation />
    </Router>
  ))
