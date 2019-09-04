import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { ResultList } from "."
import { ItemInit } from "../../utils/searchSubmit"

storiesOf("ResultList", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <ResultList items={ItemInit} />)
