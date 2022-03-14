module.exports = {
  stories: ["../src/**/?(*.)stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
  ],
  staticDirs: ["../public"],
  core: {
    builder: "webpack5",
  },
}
