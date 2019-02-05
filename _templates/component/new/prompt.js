module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's the name of the component?",
  },
  {
    type: "list",
    name: "componentType",
    message: "What kind?",
    choices: ["function", "class"],
    default: "function",
  },
  {
    type: "confirm",
    name: "connected",
    message: "Is the component connected to Redux?",
    default: "N",
  },
];
