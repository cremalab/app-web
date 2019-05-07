import stories from "./stories.json"

let storyKeys: string[] = Object.keys(stories);
storyKeys.forEach((component) => {
  describe(`${component}`, () => {
    stories[component].forEach(story => {
      it(`should render the story for ${component} with ${story["name"]}`, () => {
        browser.url(`/iframe.html?id=${component.toLowerCase()}--${story["name"]}`)
        const screenshots = browser.checkDocument()
        expect(screenshots).toMatchScreenshots();
      })
    })
  })  
})
