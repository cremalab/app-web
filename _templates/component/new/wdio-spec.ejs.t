---
to: src/components/<%= name %>/test/wdio/default.ts
---

import { assertScreenMatches } from "../../../../utils/webdriverutils"
import stories from "../../../../../stories.json"

describe("Stories for ${<%= name %>}", () => {
  stories['<%= name %>'].forEach(story => {
    it(`should render the story for '<%= name %>' with ${story.name}`, () => {
      browser.url(`/iframe.html?id=<%= name.toLowerCase() %>--${story.name}`);
      const screenshots = browser.checkDocument()
      assertScreenMatches(screenshots)
    })
  })
})
