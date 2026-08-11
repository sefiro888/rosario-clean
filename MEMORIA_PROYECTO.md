# Memoria del Proyecto — Rosario Clean

## Datos del negocio
- **Nombre:** Rosario Clean
- **Servicio:** Limpieza de apartamentos turísticos, Airbnb y viviendas vacacionales
- **Zonas ÚNICAS:** San José y Pozo de los Frailes (Almería)
- **Teléfono / WhatsApp:** 616 25 55 53 (+34616255553)
- **Email:** rosario.clean@hotmail.com
- **Web:** https://www.rosario-clean.es/
- **NIF:** 15518345S
- **Domicilio fiscal:** Níjar, Almería, España

## Archivos del proyecto
```
C:\Users\sefir\Documents\Rosario-Clean\
├── index.html                          ← Web principal (todo en un archivo)
├── sobre-rosario.html                  ← Página "Sobre Rosario"
├── limpieza-san-jose.html              ← Landing page SEO San José
├── limpieza-pozo-de-los-frailes.html   ← Landing page SEO Pozo de los Frailes
├── robots.txt                          ← Apunta a www.rosario-clean.es
├── sitemap.xml                         ← 4 URLs indexadas
├── MEMORIA_PROYECTO.md                 ← Este archivo
└── imagenes/                           ← 32 fotos comprimidas (~40% menos peso)
    ├── rosario.jpeg ... rosario7.jpeg
    ├── antesydespues.jpeg ... antesydespues4.jpeg
    ├── habitacion_antes/despues.jpeg
    ├── bano_antes.jpeg, bano2.jpeg
    ├── salon_antes/despues.jpeg
    ├── cocina_antes/despues (varios)
    ├── carta_anna_jorn.jpeg            ← Testimonio real manuscrito
    └── ...
```

## Repositorio GitHub
- **Repo:** sefiro888/rosario-limpio (o similar)
- **Deploy:** GitHub Pages → www.rosario-clean.es

---

## Tecnología
- HTML/CSS/JS en un solo archivo (`index.html`) — sin framework
- Google Fonts: Sacramento (script), Cormorant Garamond, Inter
- CSS custom properties: `--green-dark:#2F4B2A`, `--green:#4A6238`, `--gold:#B8956A`, `--beige:#F4EBD9`, `--cream:#FBF7EC`
- Sin backend — formulario envía por WhatsApp

---

## Estructura de secciones (index.html)
1. Page Loader animado
2. Nav sticky con glassmorphism
3. **Hero** — H1: "Limpieza de apartamentos turísticos en San José"
4. Servicios (4 cards)
5. Antes/Después — sliders comparativos (habitación, baño, salón, cocina)
6. Por qué Rosario Clean
7. **Sobre Rosario** — monograma R + emojis animados (🧼🔑📋💚)
8. Cómo trabajamos (proceso 4 pasos)
9. **Tarifas** por tipo de alojamiento:
   - 1 dormitorio: 60€
   - 2 dormitorios: 70€ (destacada)
   - Dúplex: 90€
   - Chalet/Villa: consultar
10. Zona — mapa San José + pills (San José / Pozo de los Frailes)
11. Galería de fotos
12. **Testimonio Anna y Jörn** — carta manuscrita real + cita
13. FAQ (11 preguntas con schema FAQPage)
14. Contacto — formulario → WhatsApp
15. Footer con enlaces a páginas HTML

---

## SEO — Lo que está implementado
- Title: `Limpieza de apartamentos turísticos en San José | Rosario Clean`
- Meta description con keywords: Airbnb, viviendas vacacionales, San José, Pozo de los Frailes
- H1 único y optimizado
- Canonical: `https://www.rosario-clean.es/`
- Meta robots: index, follow
- **Schema JSON-LD:**
  - LocalBusiness completo (url, logo, geo, hasOfferCatalog)
  - FAQPage con 11 preguntas
- Alt texts en todas las imágenes con keywords locales
- Preload imagen hero (LCP)
- robots.txt y sitemap.xml
- 4 páginas indexadas en sitemap

## Páginas adicionales (SEO local)
| Página | Keyword | Estado |
|--------|---------|--------|
| `/limpieza-san-jose.html` | limpieza apartamentos turísticos San José | ✅ Live |
| `/limpieza-pozo-de-los-frailes.html` | limpieza apartamentos turísticos Pozo de los Frailes | ✅ Live |
| `/sobre-rosario.html` | Rosario Clean confianza San José | ✅ Live |

---

## Legal — Estado completo ✅
- **Aviso Legal:** NIF 15518345S, email, domicilio, LSSICE art.10
- **Política de Privacidad:** RGPD, base jurídica, derechos usuario, AEPD
- **Política de Cookies:** solo cookies técnicas propias
- **Banner de cookies:** activo
- Última actualización: junio 2026

---

## WhatsApp — Mensaje prellenado en TODOS los botones
```
Hola Rosario, he visto tu web y quiero pedir presupuesto para la limpieza
de un apartamento turístico en San José o Pozo de los Frailes.
```
URL: `wa.me/34616255553?text=Hola%20Rosario%2C%20he%20visto%20tu%20web...`

---

## Navegación móvil
- **Escritorio:** links de sección + "Sobre Rosario" + botón Contactar
- **Móvil:** oculta links de sección, muestra 3 pills: Sobre Rosario · San José · Pozo de los Frailes

---

## Google Search Console
- Dominio verificado: `https://www.rosario-clean.es/`
- Estado (junio 2026): 15 clics / 19 impresiones / CTR 78.9% / Posición 1.5
- Query principal: "rosario clean apartamentos" (branded)
- Problema: pocas impresiones en búsquedas genéricas → necesita Google Business Profile

---

## Pendiente (no hecho aún)
1. **Google Business Profile** — Rosario debe crearlo desde su móvil en business.google.com
   - Categoría: Servicio de limpieza del hogar
   - Zona: San José + Pozo de los Frailes
   - Verificar por SMS/vídeo
2. **Reseñas Google** — Pedir a Anna y Jörn (carta manuscrita que tienen)
3. **Foto de Rosario** — para la sección "Sobre Rosario" (actualmente solo monograma R)
4. **Más testimonios** — pedir a otros clientes
5. **Instagram** — publicar fotos antes/después con hashtags locales
6. **Directorios locales** — Páginas Amarillas, Yelp, Habitissimo (gratis)
7. **Google Analytics** — pendiente de crear cuenta
8. **Fase 2 SEO** — 1-2 artículos HTML estáticos sobre temas de interés

---

## Imágenes disponibles
| Archivo | Contenido | Usado en |
|---------|-----------|----------|
| rosario.jpeg - rosario7.jpeg | Fotos servicio/producto | Hero, galería |
| habitacion_antes/despues.jpeg | Habitación B&A | Slider |
| bano_antes.jpeg / bano2.jpeg | Baño B&A | Slider |
| salon_antes/despues.jpeg | Salón B&A | Slider |
| cocina_antes2.jpeg | Fregadero sucio | Slider cocina (antes) |
| cocina_despues3.jpeg | Cocina completa limpia | Slider cocina (después) |
| cocina_despues2.jpeg | Cocina limpia | Galería |
| carta_anna_jorn.jpeg | Carta manuscrita huéspedes | Sección testimonio |
| antesydespues*.jpeg | Varias B&A | Galería |
| apartamento.jpeg, terraza.jpeg... | Espacios varios | Galería |

---

## Historial de cambios importantes
- Zonas corregidas múltiples veces → SOLO San José y Pozo de los Frailes
- Teléfono cambiado de 634149607 → **616 25 55 53**
- Tarifas cambiadas de packs (Esencial/Completo/Premium) → por tipo de alojamiento
- FAQ ampliado de 5 a 11 preguntas
- 32 imágenes comprimidas (~40% ahorro)
- Añadido slider cocina antes/después
- Testimonio Anna y Jörn implementado con foto de carta real
