const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'wbs7da',
  video: false,
  env: {
    projectURL: 'https://demoqa.com/',
    browserSupport: 'Chrome',
    QA_Name: 'Auntor Acharja',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://demoqa.com/',
    specPattern: [
      // 'cypress/e2e/Elements/*.js',
      // 'cypress/e2e/Forms/*.js',
      // 'cypress/e2e/AlertFrameWindows/*.js',
      'cypress/e2e/Widgets/*js',
      // 'cypress/e2e/Interactions/*.js',
      // 'cypress/e2e/BookStoreApplication/*.js',
    ],
  },
})
