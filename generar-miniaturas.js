/* Genera versiones ligeras (WebP + JPEG) para las tarjetas de servicios.
   Ejecutar: node generar-miniaturas.js */
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ORIGEN = path.join(__dirname, 'imagenes');
const DESTINO = path.join(ORIGEN, 'srv');

// Foto que ilustra cada servicio
const FOTOS = {
  'srv-limpieza':      'cocina_despues3.jpeg',
  'srv-lenceria':      'habitacion_despues.jpeg',
  'srv-checkin':       'salon_despues.jpeg',
  'srv-llaves':        'apartamento.jpeg',
  'srv-revision':      'bano2.jpeg',
  'srv-disponibilidad':'terraza.jpeg',
};

(async () => {
  if (!fs.existsSync(DESTINO)) fs.mkdirSync(DESTINO, { recursive: true });

  for (const [nombre, archivo] of Object.entries(FOTOS)) {
    const entrada = path.join(ORIGEN, archivo);
    if (!fs.existsSync(entrada)) { console.log('FALTA ' + archivo); continue; }

    await sharp(entrada).resize(720, 480, { fit: 'cover', position: 'centre' })
      .webp({ quality: 78 }).toFile(path.join(DESTINO, nombre + '.webp'));

    await sharp(entrada).resize(720, 480, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(DESTINO, nombre + '.jpeg'));

    const kb = Math.round(fs.statSync(path.join(DESTINO, nombre + '.webp')).size / 1024);
    console.log('  ' + nombre.padEnd(20) + archivo.padEnd(26) + kb + ' KB (webp)');
  }
  console.log('Listo.');
})();
