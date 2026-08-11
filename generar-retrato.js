const sharp = require('sharp');
const path = require('path');

const origen = path.join(__dirname, 'rosario-perfil.jpeg');
const destino = path.join(__dirname, 'imagenes');

// Recorte cerrado sobre el rostro: elimina techo del coche, ventanilla y reposacabezas
const RECORTE = { left: 130, top: 205, width: 740, height: 740 };

(async () => {
  await sharp(origen)
    .extract(RECORTE)
    .resize(640, 640, { fit: 'cover' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(destino, 'rosario-retrato.jpeg'));

  await sharp(origen)
    .extract(RECORTE)
    .resize(640, 640, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(path.join(destino, 'rosario-retrato.webp'));

  const m = await sharp(path.join(destino, 'rosario-retrato.jpeg')).metadata();
  console.log('✅ rosario-retrato.jpeg  ' + m.width + 'x' + m.height);
})();
