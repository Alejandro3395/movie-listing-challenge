const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: "tests/e2e/fixtures",
    integrationFolder: "tests/e2e/integration",
    pluginsFile: "tests/e2e/plugins/index.js",
    supportFile: "tests/e2e/support/index.js",
    screenshotsFolder: "output/e2e/screenshots",
    videosFolder: "output/e2es/videos",
    baseUrl: "http://localhost:4200"
  },
});
