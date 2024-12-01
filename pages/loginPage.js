class LoginPage {
  get menuIcon() {
    return $("-android uiautomator:new UiSelector().className(\"android.widget.ImageView\").instance(0)");
  }


  get usernameField() {
    return $("accessibility id:Username input field");
  }

  get passwordField() {
    return $("accessibility id:Password input field");
  }

  get textViewMessage() {
    return $("android.widget.TextView");
  }

  get loginButton() {
    return $("-android uiautomator:new UiSelector().text(\"Login\").instance(1)");;
  }

  async clearUserName() {
    await this.usernameField.clearValue();
  }

  async enterUsername(username) {
    await this.clearUserName();
    await this.usernameField.setValue(username);
  }

  async clearPassword() {
    await this.passwordField.clearValue();
  }

  async enterPassword(password) {
    await this.passwordField.clearValue();
    await this.passwordField.setValue(password);
  }

  async clickSideMenuButton() {
    await this.menuIcon.click();
  }

  async clickLoginLink() {
    await driver.action('pointer')
      .move({ duration: 0, x: 97, y: 1579 })
      .down({ button: 0 })
      .pause(50)
      .up({ button: 0 })
      .perform();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    var textMsg = await this.textViewMessage.getText();
    return textMsg;
  }

  async navigateToLoginScreen() {
    this.clickSideMenuButton;
    this.clickLoginLink;
  }

}

module.exports = new LoginPage();
