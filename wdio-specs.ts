import { configure, getStorybook } from "@storybook/react"
import glob from "glob"
import path from "path"

require.extensions[".svg"] = () => 1
require.extensions[".css"] = () => 1

function loadStories() {
  glob.sync("./src/components/*/stories.tsx").forEach(function(file) {
    require(path.resolve(file))
  })
}

configure(loadStories, module)

getStorybook().forEach(storyBucket => {
  describe(`${storyBucket.kind}`, () => {
    storyBucket.stories.forEach(story => {
      it(`should render the story for ${storyBucket.kind} with ${
        story.name
      }`, () => {
        browser.url(
          `/iframe.html?id=${storyBucket.kind.toLowerCase()}--${story.name}`,
        )
        const screenshots = browser.checkDocument()
        expect(screenshots).toMatchScreenshots()
      })
    })
  })
})
