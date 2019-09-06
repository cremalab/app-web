import { configure } from "@storybook/react"
import "loki/configure-react"
import "../src/index.css"

const req = require.context("../src", true, /stories\.(jsx|tsx)$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
