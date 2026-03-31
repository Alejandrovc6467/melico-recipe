// /* eslint-disable no-undef */
((Drupal, once) => {
  Drupal.behaviors.tpmsToggleRadio = {
    attach(context) {
      once('tpmsToggleRadioWrapper', '#edit-es-concierto--wrapper', context).forEach(
        (wrapper) => {
          const radioSelector = 'input[type="radio"][name="es_concierto"]';

          const getRadioFromEvent = (e) => {
            const input = e.target.closest?.(radioSelector);
            if (input) return input;

            const label = e.target.closest?.('label[for]');
            if (label?.htmlFor) {
              return wrapper.querySelector(`#${CSS.escape(label.htmlFor)}`);
            }
            return null;
          };

          const remember = (e) => {
            const radio = getRadioFromEvent(e);
            if (!radio) return;
            radio.dataset.wasChecked = radio.checked ? '1' : '0';
          };

          wrapper.addEventListener('mousedown', remember, true);
          wrapper.addEventListener('touchstart', remember, true);

          wrapper.addEventListener(
            'click',
            (e) => {
              const radio = getRadioFromEvent(e);
              if (!radio) return;

              const wasChecked = radio.dataset.wasChecked === '1';
              if (!wasChecked) return;
              e.preventDefault();

              setTimeout(() => {
                radio.checked = false;
                radio.dispatchEvent(new Event('change', { bubbles: true }));
              }, 0);
            },
            true
          );

          wrapper.addEventListener(
            'keydown',
            (e) => {
              if (e.key !== ' ' && e.code !== 'Space') return;
              const radio = getRadioFromEvent(e);
              if (!radio) return;

              radio.dataset.wasChecked = radio.checked ? '1' : '0';

              if (radio.dataset.wasChecked === '1') {
                e.preventDefault();
                setTimeout(() => {
                  radio.checked = false;
                  radio.dispatchEvent(new Event('change', { bubbles: true }));
                }, 0);
              }
            },
            true
          );
        }
      );
    },
  };
})(Drupal, once);
