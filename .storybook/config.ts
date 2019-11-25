import { configure } from "@storybook/react"
import "loki/configure-react"
import "../src/index.css"

configure(require.context('../src', true, /\.stories\.tsx$/), module)
