import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Search } from "."

storiesOf("Search", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <Search>Search</Search>)
