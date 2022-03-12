const changeCase = require("change-case")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the utility?",
      })
      .then(({ name }) => ({
        name: changeCase.camelCase(name.trim()),
      }))
  },
}
