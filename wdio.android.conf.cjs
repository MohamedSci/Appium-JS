require('@babel/register');


exports.config = {
  runner: 'local',
  baseUrl: 'Localhost',  // Set to a valid URL if testing web
  hostname: '127.0.0.1', // Localhost for Appium
  port: 4723,           // Default Appium port
  protocol: 'http',
  path: '/wd/hub',      // Appium's default path
  specs: ['./features/*.feature'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:app': 'Android-MyDemoAppRN.1.3.0.build-244.apk',
    'appium:automationName': 'UiAutomator2',
    'appium:platformVersion': '11.0',      // Replace with the actual version
    'appium:noReset': true,
  }],
  services: ['appium'],
  framework: '@wdio/cucumber-framework',
  cucumberOpts: {
    require: ['./features/step_definitions/loginSteps.mjs'],
    backtrace: false,
    requireModule: ['@babel/register'], // Ensure Babel is used for backward compatibility if needed
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    strict: true,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },

  reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
};
