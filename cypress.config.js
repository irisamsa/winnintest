const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  baseUrl: 'https://www.wikipedia.org/',
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,

});
