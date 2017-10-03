var config = require('../nightwatch.conf')

module.exports = {
  'test app structure': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('.codit', 5000)
      .assert.elementPresent('.content__header')
      .assert.containsText('h1', 'Codit')
      .saveScreenshot(`${config.output_folder}/codit.png`)
      .end()
  },
  'test app style': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementPresent('.developer__name', 5000)

    browser.expect.element('.developer__name').to.have.css('font-weight').which.equal('bold')
    browser.end()
  }
}
