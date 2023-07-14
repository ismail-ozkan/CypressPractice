const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/',
    env: {
      selenium: 'seleniumPractise/#/'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/rahul/*.js'
  },
});
