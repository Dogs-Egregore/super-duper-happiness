const puppeteer = require("puppeteer");


(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  })
  const page = await browser.newPage();
  await page.goto('https://mealprepmanual.com/recipes/');
  // other actions...

  await browser.close();
})();