const { defineConfig } = require('cypress');

module.exports = defineConfig({
  "chromeWebSecurity": false, // If needed
  failOnStatusCode: false,
  e2e: {
    baseUrl: 'https://rp.epam.com',
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/tests/*.cy.js',
    "supportFile": "cypress/support/index.js" ,

  },
  env: {
    username: 'arsenhovhannisyan',
    password: 'Portal2024+',
  },
});
