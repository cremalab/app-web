module.exports = [
  {
    message: "What's the name of the component?",
    name: "name",
    type: "input",
  },
  {
    choices: ["function", "class"],
    default: "function",
    message: "What kind?",
    name: "componentType",
    type: "select",
  },
  {
    default: "N",
    message: "Is the component connected to Redux?",
    name: "connected",
    type: "toggle",
  },
];
