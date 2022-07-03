const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl:'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});