exports.config = {
    // Test runner configuration
    runner: 'local',
  
    // Specify test files (features)
    specs: ['./features/*.feature'],
  
    // Exclude any specific files (if needed)
    exclude: [],
  
    // Run tests sequentially (recommended for BDD)
    maxInstances: 1,
  
    // Appium capabilities for your Android emulator
    capabilities: [{
      platformName: 'Android',
      deviceName: 'emulator-5554', // Adjust if using a different device name
      app: 'Android-MyDemoAppRN.1.3.0.build-244.apk', // Update path
      automationName: 'UiAutomator2',
    }],
  
    // BDD framework with Cucumber integration
    framework: '@wdio/cucumber-framework',
  
    // Cucumber-specific options
    cucumberOpts: {
      // Path to step definitions (adjust file extension if necessary)
      require: ['./features/step_definitions/loginSteps.mjs'],
      backtrace: false,
      requireModule: [],
      strict: true,
      tagExpression: '', // Add tags to filter features (optional)
      timeout: 60000,
      ignoreUndefinedDefinitions: false,
    },
  
    // (Optional) Additional configurations
  
    // Page Object Model (POM) configuration (if applicable)
    // You might have a separate configuration file for your POM
    // ...
  
    // Reporting setup (optional)
    // ...
  
    // Other WebdriverIO configurations (optional)
    // ...
  };