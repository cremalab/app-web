import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { AuthRoutes } from "."

storiesOf("AuthRoutes", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <AuthRoutes />)
