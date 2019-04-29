import { storiesOf } from "@storybook/react"
import React from "react"
import { Base as App } from "."

storiesOf("App", module).add("default", () => (
  <App todos={[]} addTodo={() => undefined} />
))
