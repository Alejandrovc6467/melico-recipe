(function ($, Drupal) {
  Drupal.behaviors.miComportamiento = {
    attach: function (context, settings) {
      var $activeLink = $('.acceso-rapido.menu .acceso-rapido.menu__link--active', context);
      if ($activeLink.length > 0) {
        var activeText = $activeLink.text().trim();
        $('.menu-label', context).text(activeText);
      }
    }
  };
})(jQuery, Drupal);
