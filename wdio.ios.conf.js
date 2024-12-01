exports.config = {
  runner: 'local',
  specs: ['./features/*.feature'],
  maxInstances: 1,
  capabilities: [{
    "platformName": "Android",
    "platformVersion": "11",
    "deviceName": "emulator-5554",
    "app": "Android-MyDemoAppRN.1.3.0.build-244.apk",
    "automationName": "UiAutomator2"
  }],
  framework: '@wdio/cucumber-framework',
  cucumberOpts: {
    require: ['./features/step_definitions/loginSteps.mjs'],
    timeout: 60000,
  },
  reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
};
