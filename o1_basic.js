const { chromium } = require('playwright');

(async () => {
  // Launch Chromium browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Navigating to example website...');
  await page.goto('https://example.com');

  const title = await page.title();
  console.log(`Page Title: ${title}`);

  await browser.close();
})();
