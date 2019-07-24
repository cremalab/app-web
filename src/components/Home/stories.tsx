import { storiesOf } from "@storybook/react"
import React from "react"
import { decoratorCentered } from "../../utils/decoratorCentered"
import { Home, Data } from "."
import { AxiosResponse } from "axios"
import { boardgames } from "../../utils/boardgames"

storiesOf("Home", module)
  .addDecorator(decoratorCentered)
  .add("default", () => {
    return (
      <Home
        id="1"
        request={() =>
          Promise.resolve<AxiosResponse<Data>>({
            status: 200,
            statusText: "You got it!",
            headers: {},
            config: {},
            data: {
              result: [],
            },
          })
        }
      />
    )
  })
  .add("user", () => {
    return (
      <Home
        id="1"
        request={() =>
          Promise.resolve<AxiosResponse<Data>>({
            status: 200,
            statusText: "You got it!",
            headers: {},
            config: {},
            data: {
              result: boardgames,
            },
          })
        }
      />
    )
  })
