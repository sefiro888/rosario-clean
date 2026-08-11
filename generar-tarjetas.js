const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  // deviceScaleFactor alto => imágenes nítidas para imprenta
  const context = await browser.newContext({ deviceScaleFactor: 4 });
  const page = await context.newPage();

  const file = 'file:///' + path.resolve(__dirname, 'tarjetas.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500); // fuentes + render

  const carpeta = path.join(__dirname, 'imagenes', 'tarjetas');
  if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

  // borrar las antiguas de la carpeta imagenes/
  ['tarjeta-diseno1-verde-elegante','tarjeta-diseno2-beige-calido','tarjeta-diseno3-blanco-moderno','tarjeta-diseno4-verde-salvia'].forEach(n=>{
    const p = path.join(__dirname,'imagenes',n+'.png');
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });

  const diseños = [
    { id: 'c1', nombre: 'tarjeta-1-verde-esmeralda' },
    { id: 'c2', nombre: 'tarjeta-2-crema-botanico' },
    { id: 'c3', nombre: 'tarjeta-3-blanco-minimalista' },
    { id: 'c4', nombre: 'tarjeta-4-verde-salvia' },
    { id: 'c5', nombre: 'tarjeta-5-terracota' },
    { id: 'c6', nombre: 'tarjeta-6-negro-lujo' },
    { id: 'c7', nombre: 'tarjeta-7-diagonal' },
    { id: 'c8', nombre: 'tarjeta-8-kraft' },
  ];

  for (const d of diseños) {
    // conjunto (anverso + reverso) para elegir
    const row = await page.$('#' + d.id);
    await row.screenshot({ path: path.join(carpeta, d.nombre + '.png') });

    // caras sueltas en alta resolución para imprenta
    const caras = await page.$$('#' + d.id + ' .card');
    if (caras[0]) await caras[0].screenshot({ path: path.join(carpeta, d.nombre + '-anverso.png') });
    if (caras[1]) await caras[1].screenshot({ path: path.join(carpeta, d.nombre + '-reverso.png') });

    console.log('✅ ' + d.nombre + ' (conjunto + anverso + reverso)');
  }

  await browser.close();
  console.log('\n🎉 Listo. 8 diseños en: imagenes/tarjetas/');
})();
