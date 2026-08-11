/* Rosario Clean — comparadores antes/después.
   Arrastrar el divisor revela la imagen "después". También responde
   al teclado (flechas) cuando el comparador tiene el foco. */

(function () {
  'use strict';

  document.querySelectorAll('.compare').forEach(function (comparador) {
    var fijarCorte = function (pct) {
      pct = Math.max(0, Math.min(100, pct));
      comparador.style.setProperty('--split', pct + '%');
      comparador.setAttribute('aria-valuenow', Math.round(pct));
    };

    var alMover = function (clientX) {
      var caja = comparador.getBoundingClientRect();
      fijarCorte(((clientX - caja.left) / caja.width) * 100);
      comparador.classList.add('touched');
    };

    var arrastrando = false;

    comparador.addEventListener('pointerdown', function (e) {
      arrastrando = true;
      if (comparador.setPointerCapture) comparador.setPointerCapture(e.pointerId);
      alMover(e.clientX);
    });
    comparador.addEventListener('pointermove', function (e) {
      if (arrastrando) alMover(e.clientX);
    });

    var soltar = function () { arrastrando = false; };
    comparador.addEventListener('pointerup', soltar);
    comparador.addEventListener('pointercancel', soltar);
    comparador.addEventListener('pointerleave', soltar);

    /* Accesible con teclado */
    comparador.setAttribute('role', 'slider');
    comparador.setAttribute('tabindex', '0');
    comparador.setAttribute('aria-valuemin', '0');
    comparador.setAttribute('aria-valuemax', '100');
    comparador.setAttribute('aria-valuenow', '50');
    comparador.setAttribute('aria-label', 'Comparador de antes y después');

    comparador.addEventListener('keydown', function (e) {
      var actual = parseFloat(comparador.getAttribute('aria-valuenow')) || 50;
      var paso = e.shiftKey ? 10 : 4;
      if (e.key === 'ArrowLeft')       { fijarCorte(actual - paso); comparador.classList.add('touched'); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { fijarCorte(actual + paso); comparador.classList.add('touched'); e.preventDefault(); }
      else if (e.key === 'Home')       { fijarCorte(0);  e.preventDefault(); }
      else if (e.key === 'End')        { fijarCorte(100); e.preventDefault(); }
    });
  });
})();
