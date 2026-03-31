/* eslint-disable no-undef */
((Drupal, once) => {
  Drupal.behaviors.stickyHeaderOffset = {
    attach(context) {
      once('stickyHeaderOffset', 'body', context).forEach(() => {
        const page = document.getElementById('page');
        if (!page || !page.classList.contains('logged-out')) return;

        const header = document.querySelector('.header-region');
        if (!header) return;

        const setOffset = () => {
          const height = header.offsetHeight || 0;
          document.documentElement.style.setProperty(
            '--header-sticky-height',
            `${height}px`,
          );
        };

        setOffset();

        if ('ResizeObserver' in window) {
          const observer = new ResizeObserver(setOffset);
          observer.observe(header);
        } else {
          window.addEventListener('resize', setOffset);
        }
      });
    },
  };
})(Drupal, once);
