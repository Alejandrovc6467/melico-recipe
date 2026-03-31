(function ($, Drupal) {
  Drupal.behaviors.fontResizer = {
    attach: function (context, settings) {
      const buttons = $(context).find('.font-resizer__button').not('.js-initialized');
      const html = document.documentElement;

      if (!buttons.length) {
        return;
      }

      const savedSize = localStorage.getItem("fontSize");
      if (savedSize) {
        html.style.fontSize = savedSize;
        const allButtons = $(context).find('.font-resizer__button');
        allButtons.removeClass('is-active');
        allButtons.filter('[data-size="' + savedSize + '"]').addClass('is-active');
      }

      buttons.each(function () {
        const $button = $(this);
        $button.addClass('js-initialized');
        $button.on('click', function (e) {
          e.preventDefault();
          const size = $button.data('size');
          html.style.fontSize = size;
          localStorage.setItem("fontSize", size);

          const allButtons = $(context).find('.font-resizer__button');
          allButtons.removeClass('is-active');
          $button.addClass('is-active');
        });
      });
    }
  };
})(jQuery, Drupal);
