const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/loginPage');
const DashboardPage = require('../../pages/dashboardPage');
// const { expect } = require('chai');
import { expect } from 'chai'; // Import the 'expect' assertionconst { expect } = chai;

// Test data for different credential scenarios
const TEST_DATA = {
  LOCKED: { username: 'alice@example.com', password: '10203040' },
  NO_MATCH: { username: '1@2.com', password: 'f-o-o' },
  NO_USER_DETAILS: { username: '', password: '' },
  NO_PASSWORD: { username: 'bob@example.com', password: '' },
  STANDARD: { username: 'bob@example.com', password: '10203040' },
};

// Expected validation messages
const VALIDATION_MESSAGES = {
  LOCKED: "Sorry, this user has been locked out.",
  NO_MATCH: "Provided credentials do not match any user in this service.",
  NO_USER_DETAILS: "Username is required",
  NO_PASSWORD: "Password is required",
  STANDARD: "Checkout",
};

Given('the user is on the login screen', async () => {
  await LoginPage.navigateToLoginScreen();
});

When('the user enters {string} credentials', async (type) => {
  const credentials = TEST_DATA[type.toUpperCase()];
  await LoginPage.enterUsername(credentials.username);
  await LoginPage.enterPassword(credentials.password);
});

When('the user does not enter username and password', async () => {
  await LoginPage.clearUsernameField();
  await LoginPage.clearPasswordField();
});

When('clicks on the login button', async () => {
  await LoginPage.clickLoginButton();
});

Then('the user should see the dashboard', async () => {
  expect(await DashboardPage.isWelcomeMessageVisible()).to.be.true;
});

Then('the "{string}" error message should be displayed', async (type) => {
  const validationMsg = VALIDATION_MESSAGES[type.toUpperCase()];
  expect(await LoginPage.getErrorMessage()).to.equal(validationMsg);
});
