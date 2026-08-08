import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log("Navigating...");
  await page.goto('https://571cc6d8.vibe-ui-hub.pages.dev', { waitUntil: 'networkidle2' });
  
  console.log("Waiting 2s...");
  await new Promise(r => setTimeout(r, 2000));
  
  console.log("Clicking Button Library tab...");
  const btns = await page.$$('button');
  for (const btn of btns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('Button Library')) {
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1000));

  console.log("Clicking Sandbox...");
  const sbBtns = await page.$$('button');
  for (const btn of sbBtns) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text.includes('Sandbox')) {
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1000));
  
  console.log("Closing browser.");
  await browser.close();
})();
