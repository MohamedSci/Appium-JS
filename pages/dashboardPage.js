class DashboardPage {
  get ShoppingButton() {
    return $('//android.widget.TextView[@text="Go Shopping"]');
  }

  async ensureSuccessfulNavigation() {
    var shoppingTxt = await this.ShoppingButton.getText();
    expect(shoppingTxt).to.equal("Go Shopping");
  }

}

module.exports = new DashboardPage();
