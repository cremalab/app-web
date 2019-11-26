/* eslint-disable @typescript-eslint/no-var-requires */
const i = require("inflection")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "Component name:",
      })
      .then(({ name }) => {
        return prompter
          .prompt({
            default: "N",
            message: "Does component use state?",
            name: "useState",
            type: "toggle",
          })
          .then(({ useState }) => ({ name: i.camelize(name, false), useState }))
      })
  },
}
