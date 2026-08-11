const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ deviceScaleFactor: 4 });
  const page = await context.newPage();

  const file = 'file:///' + path.resolve(__dirname, 'carteles.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  const carpeta = path.join(__dirname, 'imagenes', 'carteles');
  if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

  const opciones = [
    { id: 'o1', nombre: 'cartel-1-botanico-lavanda' },
    { id: 'o2', nombre: 'cartel-2-verde-oliva' },
    { id: 'o3', nombre: 'cartel-3-crema-minimalista' },
  ];

  for (const o of opciones) {
    const posters = await page.$$('#' + o.id + ' .poster');
    if (posters[0]) await posters[0].screenshot({ path: path.join(carpeta, o.nombre + '-delante.png') });
    if (posters[1]) await posters[1].screenshot({ path: path.join(carpeta, o.nombre + '-detras.png') });
    console.log('✅ ' + o.nombre + ' (delante + detrás)');
  }

  await browser.close();
  console.log('\n🎉 Listo. 3 carteles a doble cara en: imagenes/carteles/');
})();
