import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { ResultListRow } from "."

storiesOf("ResultListRow", module)
  .addDecorator(decoratorCentered)
  .add("default", () => <ResultListRow>ResultListRow</ResultListRow>)
