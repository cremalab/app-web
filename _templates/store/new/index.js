/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  prompt: ({ prompter }) => {
    return prompter.prompt({
      default: "N",
      message: "Does store use thunk?",
      name: "useThunk",
      type: "toggle",
    })
  },
}
