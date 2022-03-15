// eslint-disable-next-line @typescript-eslint/no-var-requires
const changeCase = require("change-case")

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "Component name:",
      })
      .then(({ name: nameRaw }) => {
        const name = changeCase.pascalCase(nameRaw.trim(), true)

        return prompter
          .prompt({
            default: "N",
            message: `Did you want to generate <${name} /> with example code?`,
            name: "withExample",
            type: "toggle",
          })
          .then(({ withExample }) => {
            if (withExample) {
              return prompter
                .prompt({
                  default: "N",
                  message: `Did you want to include useState in the example <${name} />?`,
                  name: "useState",
                  type: "toggle",
                })
                .then(({ useState }) => ({
                  name,
                  withExample,
                  useState,
                }))
            }

            return {
              name,
              withExample,
              useState: false,
            }
          })
      })
  },
}
