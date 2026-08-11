/* Rosario Clean — comportamiento común de la navegación.
   Menú hamburguesa (móvil) y desplegable de zonas (escritorio).
   El index tiene su propia copia del menú hamburguesa dentro de su script;
   este archivo lo usan las páginas secundarias. */

(function () {
  'use strict';

  /* ---- Menú móvil ---- */
  var btn  = document.getElementById('navHamburger');
  var menu = document.getElementById('navMobileMenu');

  if (btn && menu) {
    var cerrarMenu = function () {
      btn.classList.remove('open');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    };

    btn.addEventListener('click', function () {
      if (menu.classList.contains('open')) { cerrarMenu(); return; }
      btn.classList.add('open');
      menu.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', cerrarMenu);
    });
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) cerrarMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrarMenu();
    });
  }

  /* ---- Desplegable de zonas ---- */
  document.querySelectorAll('.nav-drop').forEach(function (drop) {
    var toggle = drop.querySelector('.nav-drop-btn');
    if (!toggle) return;

    var abrir = function (estado) {
      drop.setAttribute('data-open', estado ? 'true' : 'false');
      toggle.setAttribute('aria-expanded', estado ? 'true' : 'false');
    };

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      abrir(drop.getAttribute('data-open') !== 'true');
    });
    drop.addEventListener('mouseenter', function () { abrir(true); });
    drop.addEventListener('mouseleave', function () { abrir(false); });
    document.addEventListener('click', function (e) {
      if (!drop.contains(e.target)) abrir(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') abrir(false);
    });
  });

  /* ---- Animaciones de entrada ---- */
  var animables = document.querySelectorAll('.fade-in');
  if (animables.length) {
    if (!('IntersectionObserver' in window)) {
      animables.forEach(function (el) { el.classList.add('visible'); });
    } else {
      var io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            io.unobserve(entrada.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      animables.forEach(function (el) { io.observe(el); });
    }
  }
})();
