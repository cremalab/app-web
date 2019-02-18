import { StoryDecorator } from "@storybook/react"
import React from "react"

export const decoratorCentered: StoryDecorator = story => (
  <div
    style={{
      padding: "1em",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {story()}
  </div>
)
