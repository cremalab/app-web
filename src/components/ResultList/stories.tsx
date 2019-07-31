import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { ResultList } from "."

storiesOf("ResultList", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <ResultList>ResultList</ResultList>)
