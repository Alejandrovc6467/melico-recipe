/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
(($, Drupal, once) => {
  Drupal.behaviors.treeMenu = {
    attach(context) {
      // Solo inicializamos cada árbol una vez
      const trees = once('treeMenu', '.tpms-tree-menu', context);

      trees.forEach((menu) => {
        // 1) Binding de los toggles como antes
        $(menu)
          .find('.tpms-toggle')
          .each(function () {
            once('treeMenuToggle', this).forEach((btn) => {
              $(btn).on('click', function (e) {
                e.preventDefault();
                const $li = $(this).closest('li.has-children');
                if (!$li.length) {
                  return;
                }
                const isExpanded = $li
                  .toggleClass('expanded')
                  .hasClass('expanded');
                $(this).attr('aria-expanded', isExpanded);
              });
            });
          });

        const currentPath = window.location.pathname.replace(/\/$/, '');
        $(menu)
          .find('a')
          .each(function () {
            const href = this.getAttribute('href').replace(/\/$/, '');
            if (href === currentPath) {
              const $itemLi = $(this).closest('li');
              $itemLi.addClass('active');
              // Expandir todos sus ancestros con hijos
              $itemLi.parents('li.has-children').each(function () {
                const $parentLi = $(this);
                $parentLi.addClass('active-parent expanded');
                // también actualizamos el aria-expanded del botón
                $parentLi
                  .children('.tree-item-wrapper')
                  .find('.tpms-toggle')
                  .attr('aria-expanded', 'true');
              });
            }
          });
      });
    },
  };
})(jQuery, Drupal, once);
