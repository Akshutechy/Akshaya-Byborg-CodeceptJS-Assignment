const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.oranum.com',
      show: true,
      waitForTimeout: 60000
    }
  },
  timeout: 120000,
  gherkin: {
    features: './tests/features/*.feature',
    steps: './tests/step_definitions/*.js',
  },
  include: {
    I: './steps_file.js',
    homePagePage: "./tests/pages/homePage.js",
  },
  name: 'Akshaya-Byborg-CodeceptJS-Assignment'
}