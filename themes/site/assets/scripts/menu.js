(function ($, Drupal) {
  Drupal.behaviors.menuHoverPanel = {
    attach(context) {
      $('.menu-item.has-children[data-submenu]', context).each(function () {
        const $item = $(this);

        // Evitar aplicar el behavior más de una vez
        if ($item.hasClass('js-menu-hover-applied')) return;
        $item.addClass('js-menu-hover-applied');

        const submenuId = $item.data('submenu');
        const $panel = $(`#${submenuId}`);

        if ($panel.length === 0) return;

        const isMobile = window.innerWidth < 1024;

        // Soporte teclado (SPACE abre/cierra en el <a> padre) + ESC cierra
        const $link = $item.children('a.menu__item-menu');
        const $toggleA11y = $item.children('.submenu-toggle');

        const setExpanded = (open) => {
          $item.toggleClass('hovered', open);
          if ($toggleA11y.length) {
            $toggleA11y.attr('aria-expanded', open ? 'true' : 'false');
          }
        };

        if ($link.length) {
          $link.on('keydown', function (e) {
            if (e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(!$item.hasClass('hovered'));
            }

            if (e.key === 'Escape') {
              e.preventDefault();
              setExpanded(false);
            }
          });
        }

        $item.on('focusout', function () {
          setTimeout(() => {
            if (!$item.find(':focus').length) {
              setExpanded(false);
            }
          }, 0);
        });

        if (isMobile) {
          /* ——— BLOQUE MOBILE definitivo ——— */
          const $toggle = $item.children('.submenu-toggle');
          const $submenu = $item.children('.submenu, .submenu-wrapper');

          const toggleItem = function () {
            const isOpen = $item.hasClass('hovered');

            if (!isOpen) {
              const $siblings = $item.siblings(
                '.menu-item.has-children.hovered',
              );
              $siblings.removeClass('hovered');
              $siblings
                .find('> .submenu-toggle')
                .attr('aria-expanded', 'false');
            }

            $item.toggleClass('hovered');
            if ($toggle.length) {
              $toggle.attr(
                'aria-expanded',
                $item.hasClass('hovered') ? 'true' : 'false',
              );
            }
          };

          if ($toggle.length && $submenu.length) {
            $toggle.attr(
              'aria-expanded',
              $item.hasClass('hovered') ? 'true' : 'false',
            );

            $toggle.on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              toggleItem();
            });
          } else {
            $item.on('click', '> a.menu__item-menu', function (e) {
              e.preventDefault();
              toggleItem();
            });
          }
          /* ————————————————————————————————— */
        } else {
          // DESKTOP - Hover con delay
          $item.on('mouseenter', function () {
            const panelId = $panel.attr('id');
            const $li = $(`li[data-submenu="${panelId}"]`);
            $li.addClass('hovered');
          });

          $item.on('mouseleave', function () {
            setTimeout(function () {
              if (!$panel.is(':hover') && !$item.is(':hover')) {
                const panelId = $panel.attr('id');
                const $li = $(`li[data-submenu="${panelId}"]`);
                $li.removeClass('hovered');
              }
            }, 250);
          });

          $panel.on('mouseenter', function () {
            const panelId = $panel.attr('id');
            const $li = $(`li[data-submenu="${panelId}"]`);
            $li.addClass('hovered');
          });

          $panel.on('mouseleave', function () {
            const panelId = $panel.attr('id');
            const $li = $(`li[data-submenu="${panelId}"]`);
            $li.removeClass('hovered');
          });
        }
      });
      // Cuando no tiene Hijos que funcione los hovers
      $('.menu-item:not(.has-children)', context).each(function () {
        const $item = $(this);

        // Evitar aplicar el behavior más de una vez
        if ($item.hasClass('js-menu-hover-applied')) return;
        $item.addClass('js-menu-hover-applied');

        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
          $item.on('click', function () {
            // toggle visual en mobile
            $(this).toggleClass('hovered');
          });
        } else {
          $item.on('mouseenter', function () {
            $(this).addClass('hovered');
          });
          $item.on('mouseleave', function () {
            $(this).removeClass('hovered');
          });
        }
      });
    },
  };
})(jQuery, Drupal);
