import { configure, addDecorator } from "@storybook/react";
import "loki/configure-react";

const req = require.context("../src", true, /stories\.(jsx|tsx)$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
