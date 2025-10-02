const BasePage = require("./base.page")
const { $, driver } = require("appium.webdriverio")

/**
 * Page Object para tela WebView
 */
class WebViewPage extends BasePage {

  get webviewTab() {
    return $("~Webview")
  }

  get urlInput() {
    return $("~urlInput")
  }

  get goButton() {
    return $("~goButton")
  }


  async goToWebViewTab() {
    await this.waitAndClick(this.webviewTab)
  }

  async navigateToUrl(url) {
    await this.clearAndSetValue(this.urlInput, url)
    await this.click(this.goButton)
  }


  async switchToWebView() {
    const contexts = await driver.getContexts()
    const webviewContext = contexts.find((context) => context.includes("WEBVIEW"))
    if (webviewContext) {
      await driver.switchContext(webviewContext)
    }
  }

  async switchToNative() {
    await driver.switchContext("NATIVE_APP")
  }
}

module.exports = new WebViewPage()
