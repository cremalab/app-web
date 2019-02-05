import { createRenderer } from "react-test-renderer/shallow"
const renderer = createRenderer()

export const shallowRender = (x: JSX.Element) => renderer.render(x)
