import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { AuthRoutes } from "."
import { BrowserRouter as Router } from "react-router-dom"

storiesOf("AuthRoutes", module)
  .addDecorator(decoratorCentered)
  .add("default", () => (
    <Router>
      <AuthRoutes />
    </Router>
  ))
