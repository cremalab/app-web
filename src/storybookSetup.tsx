import { DecoratorFn, addDecorator } from "@storybook/react"
import "./index.css" // global styles

/**
 * baseDecorator
 * ----------------------------------------------------
 * This module is read by @cremalab/app-config/storybook config.
 * Wrap this decorator's return in any JSX structure you
 * want to apply to all your stories. This is also a point where
 * global imports can be added (e.g. `./index.css`)
 */

const baseDecorator: DecoratorFn = story => {
  return story()
}

addDecorator(baseDecorator)
