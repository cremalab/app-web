import { storiesOf } from "@storybook/react"
import React from "react"
import { App } from "."

storiesOf("App", module).add("default", () => (
  <App notAnimated={process.env.STORYBOOK_CI === "true"} />
))
