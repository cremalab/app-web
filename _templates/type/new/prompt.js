/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the type?",
      })
      .then(({ name }) => ({
        name: i.camelize(name, false),
      }))
  },
}
