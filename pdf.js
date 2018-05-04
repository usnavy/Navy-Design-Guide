const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file:${path.join(__dirname, 'index.html')}`);

  await page.pdf({
    format: 'Letter',
    landscape: true,
    margin: {
      top: '0.5in',
      right: 0,
      bottom: '0.5in',
      left: 0
    },
    path: 'navy_design_guide.pdf',
    printBackground: true
  });

  await browser.close();
})();
