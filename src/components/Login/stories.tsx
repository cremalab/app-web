import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Login } from "."
import { BrowserRouter as Router } from "react-router-dom"

storiesOf("Login", module)
  .addDecorator(decoratorCentered)
  .add("default", () => (
    <Router>
      <Login />
    </Router>
  ))
