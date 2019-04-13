module.exports = [
  {
    message: "Component name:",
    name: "name",
    type: "input",
  },
  {
    default: "N",
    message: "Does component use state?",
    name: "useState",
    type: "toggle",
  },
  {
    default: "N",
    message: "Is component connected to redux?",
    name: "connected",
    type: "toggle",
  },
]
