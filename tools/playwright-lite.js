const { chromium } = require('playwright');

module.exports = {
  async openPage(url) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await browser.close();
    return `Opened page: ${url}`;
  },

  async clickElement(url, selector) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.click(selector);
    await browser.close();
    return `Clicked element: ${selector}`;
  },

  async fillInput(url, selector, text) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.fill(selector, text);
    await browser.close();
    return `Filled input ${selector} with text: ${text}`;
  },

  async waitForElement(url, selector) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector(selector);
    await browser.close();
    return `Element ${selector} appeared.`;
  },

  async takeScreenshot(url, path) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path });
    await browser.close();
    return `Screenshot saved to ${path}`;
  },

  async scrollPage(url, pixels = 1000) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.evaluate(p => window.scrollBy(0, p), pixels);
    await browser.close();
    return `Scrolled page by ${pixels}px`;
  }
};
