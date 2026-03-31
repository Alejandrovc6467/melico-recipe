/* eslint-disable */
(function ($, Drupal) {
  /**
   * Control y sincronización de filtros en vistas con sidebar móvil.
   */
  Drupal.behaviors.tpmsFiltrosGenerico = {
    attach(context) {
      /* ------------------------------------------------------------------
       * 0) REGISTRO DE BOTONES “BUSCAR” EXTERNOS
       *    (btn = botón mobile | form = ID del exposed form)
       *    — Añade/edita aquí cada vista que necesites —
       * ---------------------------------------------------------------- */
      const VIEW_MAP = [
        {
          btn: '#edit-submit-lista-instituciones--3',
          form: '#views-exposed-form-lista-instituciones-block-1',
        },
        {
          btn: '#edit-submit-lista-de-noticias--3',
          form: '#views-exposed-form-lista-de-noticias-block-3',
        },
        {
          btn: '#edit-submit-lista-de-noticias--4',
          form: '#views-exposed-form-lista-de-noticias-block-4',
        },
        {
          btn: '#edit-submit-lista-cartelera--3',
          form: '#views-exposed-form-lista-cartelera-block-4',
        },
        // { btn: '#edit-submit-otra-vista--X', form: '#views-exposed-form-otra-vista-block-X' },
      ];

      /* ------------------------------------------------------------------
       * 1) TOGGLE DEL SIDEBAR MÓVIL
       * ---------------------------------------------------------------- */
      const $toggleBtn = $('#toggleSidebar', context); // Botón externo
      const $sidebar = $('#sidebar', context);       // Contenedor
      const $botonCerrar = $('.boton_cerrar', context); // “X” interna

      if ($toggleBtn.length && $sidebar.length) {
        $toggleBtn.on('click', (e) => {
          e.preventDefault();
          $sidebar.toggleClass('open');
        });
      }

      $botonCerrar.on('click', (e) => {
        e.preventDefault();
        $sidebar.toggleClass('open');
      });

      $(document).on('click', (e) => {
        const inside = $(e.target).closest('#sidebar').length > 0;
        const toggle = $(e.target).closest('#toggleSidebar').length > 0;
        if (!inside && !toggle) {
          $sidebar.removeClass('open');
        }
      });

      /* ------------------------------------------------------------------
       * 2) ENVÍO DEL FORMULARIO DESDE BOTÓN MÓVIL
       * ---------------------------------------------------------------- */
      VIEW_MAP.forEach(({ btn, form }) => {
        $(document).on('click', btn, function (e) {
          if ($(this).closest('form').length) {
            return;
          }
          e.preventDefault();
          $(form).trigger('submit');
        });
      });

      /* ------------------------------------------------------------------
       * 3) SINCRONIZACIÓN ENTRE LOS DOS FORMULARIOS
       * ---------------------------------------------------------------- */
      $('[name]', context).on('input change', function () {
        const name = $(this).attr('name');
        const type = $(this).attr('type');
        const tag = this.tagName.toLowerCase();

        if (!name) return;

        // Obtener valor según tipo de campo
        let val;
        if (type === 'checkbox') {
          const isChecked = $(this).is(':checked');
          // Sincronizar todos los checkboxes con el mismo data-drupal-selector
          const selector = $(this).attr('data-drupal-selector');
          if (selector) {
            $(`input[type="checkbox"][data-drupal-selector="${selector}"]`).not(this).prop('checked', isChecked);
          }
          return; // ya sincronizó
        } else if (tag === 'select' || type === 'text' || type === 'search' || type === 'email') {
          val = $(this).val();
        } else {
          return;
        }

        // Sincroniza todos los demás campos con el mismo `name`
        $(`[name="${name}"]`).not(this).val(val);
      });

    },
  };
})(jQuery, Drupal);
