/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")

module.exports = {
  prompt: ({ prompter }) => {
    if (!fs.existsSync("./src/store/index.ts")) {
      console.log(
        "\x1b[36m%s\x1b[0m",
        "You don't have a store, run `npm run new:store` before continuing",
      )
      throw new Error("Store Missing")
    }

    return prompter
      .prompt({
        type: "input",
        name: "name",
        message: "Slice/reducer name:",
      })
      .then(({ name }) =>
        prompter
          .prompt({
            default: "N",
            message: "Would you like an example?",
            name: "useExample",
            type: "toggle",
          })
          .then(({ useExample }) => ({ name, useExample })),
      )
  },
}
