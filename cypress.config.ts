import { defineConfig } from "cypress"
import plugins from "./cypress/plugins"

export default defineConfig({
  port: 5051,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return plugins(on, config)
    },
    baseUrl: "http://localhost:3000",
  },
})
