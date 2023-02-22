const puppeteer = require("puppeteer");


(async () => {
  const browser = await puppeteer.launch({headless: false
  })
  const page = await browser.newPage();
  await page.goto('https://mealprepmanual.com/');

  // other actions...
  await page.mainFrame().click('xpath/html/body/div[1]/div/header/div[1]/div[3]/a/span[1]'
  );
  await page.waitForSelector('xpath/html/body/div[1]/div/header/div[2]/nav/ul/li[2]/a');
  await page.mainFrame().click('xpath/html/body/div[1]/div/header/div[2]/nav/ul/li[2]/a');

})();