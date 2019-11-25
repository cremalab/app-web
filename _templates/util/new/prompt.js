/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the utility?",
      })
      .then(({ name }) => ({
        name: i.camelize(name, true),
      }))
  },
}
