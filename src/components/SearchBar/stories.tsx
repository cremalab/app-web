import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { SearchBar } from "."

storiesOf("SearchBar", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <SearchBar>SearchBar</SearchBar>)
