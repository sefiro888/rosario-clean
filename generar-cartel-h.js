const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ deviceScaleFactor: 4 });
  const page = await context.newPage();
  const file = 'file:///' + path.resolve(__dirname, 'carteles-horizontal.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  const carpeta = path.join(__dirname, 'imagenes', 'carteles');
  if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

  const f = await page.$('#frente .poster');
  await f.screenshot({ path: path.join(carpeta, 'cartel-horizontal-delante.png') });
  const r = await page.$('#reverso .poster');
  await r.screenshot({ path: path.join(carpeta, 'cartel-horizontal-detras.png') });

  await browser.close();
  console.log('✅ Cartel horizontal (delante + detrás) en imagenes/carteles/');
})();
