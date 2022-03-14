// eslint-disable-next-line @typescript-eslint/no-var-requires
const changeCase = require("change-case")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What's the name of the type?",
      })
      .then(({ name }) => ({
        name: changeCase.pascalCase(name.trim(), true),
      }))
  },
}
