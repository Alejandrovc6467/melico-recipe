Drupal.behaviors.galleryModal = {
  attach(context) {
    const modals = context.querySelectorAll('[data-gallery-modal]');

    modals.forEach((modal) => {
      const currentModal = modal;

      if (currentModal.dataset.galleryModalInit) {
        return;
      }
      currentModal.dataset.galleryModalInit = 'true';

      const gallery = currentModal.closest('.gallery');
      if (!gallery) {
        return;
      }

      const triggers = gallery.querySelectorAll('.js-gallery-modal-trigger');
      const modalImage = currentModal.querySelector(
        '[data-gallery-modal-image]',
      );
      const downloadLink = currentModal.querySelector(
        '[data-gallery-modal-download]',
      );
      const closeButton = currentModal.querySelector('.gallery-modal__close');
      const closeElements = currentModal.querySelectorAll(
        '[data-gallery-modal-close]',
      );

      if (!modalImage || !downloadLink || !closeButton) {
        return;
      }

      let lastActiveElement = null;

      const getFilenameFromUrl = (url) => {
        try {
          const parsed = new URL(url, window.location.href);
          const filename = parsed.pathname.split('/').pop();
          return filename ? decodeURIComponent(filename) : '';
        } catch (e) {
          return '';
        }
      };

      const openModal = (src, altText) => {
        lastActiveElement = document.activeElement;

        downloadLink.setAttribute('href', src);

        const filename = getFilenameFromUrl(src);
        if (filename) {
          downloadLink.setAttribute('download', filename);
        } else {
          downloadLink.setAttribute('download', '');
        }

        modalImage.setAttribute('src', src);
        modalImage.setAttribute('alt', altText || '');

        currentModal.hidden = false;
        document.body.classList.add('gallery-modal-open');

        closeButton.focus();
      };

      const closeModal = () => {
        currentModal.hidden = true;
        document.body.classList.remove('gallery-modal-open');

        modalImage.setAttribute('src', '');
        modalImage.setAttribute('alt', '');

        downloadLink.setAttribute('href', '#');

        if (
          lastActiveElement &&
          typeof lastActiveElement.focus === 'function'
        ) {
          lastActiveElement.focus();
        }
      };

      const trapTabKey = (event) => {
        if (event.key !== 'Tab') {
          return;
        }

        const focusable = [closeButton, downloadLink].filter(
          (el) =>
            el && !el.hasAttribute('disabled') && el.offsetParent !== null,
        );

        if (focusable.length === 0) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          last.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      };

      const onKeyDown = (event) => {
        if (currentModal.hidden) {
          return;
        }

        if (event.key === 'Escape') {
          event.preventDefault();
          closeModal();
          return;
        }

        trapTabKey(event);
      };

      currentModal.addEventListener('keydown', onKeyDown);

      closeElements.forEach((el) => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          closeModal();
        });
      });

      triggers.forEach((trigger) => {
        const currentTrigger = trigger;

        if (currentTrigger.dataset.galleryModalTriggerInit) {
          return;
        }
        currentTrigger.dataset.galleryModalTriggerInit = 'true';

        currentTrigger.addEventListener('click', (event) => {
          const src = currentTrigger.getAttribute('href');
          if (!src) {
            return;
          }

          event.preventDefault();

          const img = currentTrigger.querySelector('img');
          const altText = img ? img.getAttribute('alt') : '';

          openModal(src, altText);
        });
      });
    });
  },
};
