Drupal.behaviors.mainMenu = {
  attach(context) {
    const toggleExpand = context.getElementById('toggle-expand');
    const menu = context.getElementById('main-nav');
    if (menu) {
      const expandMenu = menu.getElementsByClassName('expand-sub');
      const parentLinks = menu.querySelectorAll(
        '.main-menu__item--with-sub > a, .menu-principal__item--with-sub > a',
      );
      const isMobile = () => window.innerWidth < 1024;
      const toggleSubMenu = (toggle, subMenu) => {
        if (!subMenu) {
          return;
        }

        const isOpen =
          subMenu.classList.contains('main-menu--sub-open') ||
          subMenu.classList.contains('menu-principal--sub-open');

        const subMenuStyle = subMenu.style;

        if (isOpen) {
          subMenu.classList.remove(
            'main-menu--sub-open',
            'menu-principal--sub-open',
          );
          subMenuStyle.maxHeight = '';
          if (toggle) {
            toggle.classList.remove('expand-sub--open');
          }
          return;
        }

        subMenu.classList.add(
          'main-menu--sub-open',
          'menu-principal--sub-open',
        );
        subMenuStyle.maxHeight = `${subMenu.scrollHeight}px`;
        if (toggle) {
          toggle.classList.add('expand-sub--open');
        }
      };

      // Mobile Menu Show/Hide.
      if (toggleExpand) {
        toggleExpand.addEventListener('click', (e) => {
          toggleExpand.classList.toggle('toggle-expand--open');
          menu.classList.toggle('main-nav--open');
          e.preventDefault();
        });
      }

      // Mobile: open children when clicking parent link.
      Array.from(parentLinks).forEach((link) => {
        link.addEventListener('click', (e) => {
          if (!isMobile()) {
            return;
          }

          const listItem = link.closest('li');
          if (!listItem) {
            return;
          }

          const toggle = listItem.querySelector('.expand-sub');
          const subMenu = toggle
            ? toggle.nextElementSibling
            : listItem.querySelector('.main-menu--sub, .menu-principal--sub');

          if (!subMenu) {
            return;
          }

          e.preventDefault();

          toggleSubMenu(toggle, subMenu);
        });
      });

      // Expose mobile sub menu on click.
      Array.from(expandMenu).forEach((item) => {
        item.addEventListener('click', (e) => {
          const menuItem = e.currentTarget;
          const subMenu = menuItem.nextElementSibling;
          toggleSubMenu(menuItem, subMenu);
        });
      });
    }
  },
};
