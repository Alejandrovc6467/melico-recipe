(function ($, Drupal) {
  Drupal.behaviors.searchExpandClick = {
    attach(context, settings) {
      $('.header__searchform', context).each(function () {
        const $formWrapper = $(this);

        // Evita reatachar múltiples veces
        if ($formWrapper.hasClass('js-initialized')) {
          return;
        }
        $formWrapper.addClass('js-initialized');

        const $input = $formWrapper.find('input[type="search"]');

        $formWrapper.on('click', function () {
          $formWrapper.addClass('is-active');
          $input.focus(); // opcional
        });

        // Cerrar si se hace clic fuera
        $(document).on('click', function (e) {
          if (
            !$formWrapper.is(e.target) &&
            $formWrapper.has(e.target).length === 0
          ) {
            $formWrapper.removeClass('is-active');
          }
        });
      });
    },
  };
  // Fix ARIA EU Cookie Compliance
  Drupal.behaviors.euCookieAriaFix = {
    attach(context) {
      $('.eu-cookie-compliance-banner[aria-labelledby]', context).each(
        function () {
          const $banner = $(this);

          if ($banner.hasClass('js-eu-cookie-aria-fixed')) return;
          $banner.addClass('js-eu-cookie-aria-fixed');

          $banner.removeAttr('aria-labelledby');
        },
      );
    },
  };
})(jQuery, Drupal);
