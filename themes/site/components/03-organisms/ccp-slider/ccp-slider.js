/* eslint-disable no-undef */

function initFallback(root) {
  const nav = root.querySelector('[data-tpms-ccp-nav]');
  const main = root.querySelector('[data-tpms-ccp-main]');
  if (!nav || !main) return;

  const navLis = Array.from(nav.querySelectorAll('.splide__slide'));
  const navBtns = Array.from(
    nav.querySelectorAll('.tpms-ccp-slider__nav-item'),
  );
  const mainSlides = Array.from(main.querySelectorAll('.splide__slide'));

  if (!navBtns.length || !mainSlides.length) return;

  const setActive = (idx) => {
    navLis.forEach((li, i) => li.classList.toggle('is-active', i === idx));
    mainSlides.forEach((slide, i) => {
      slide.hidden = i !== idx;
    });
  };

  setActive(0);
  navBtns.forEach((btn, i) =>
    btn.addEventListener('click', () => setActive(i)),
  );

  nav.classList.add('is-initialized');
  main.classList.add('is-initialized');
}

function initSplide(root) {
  const navEl = root.querySelector('[data-tpms-ccp-nav]');
  const mainEl = root.querySelector('[data-tpms-ccp-main]');
  if (!navEl || !mainEl) return;

  if (
    navEl.classList.contains('is-initialized') ||
    mainEl.classList.contains('is-initialized')
  ) {
    return;
  }

  if (typeof Splide === 'undefined') {
    initFallback(root);
    return;
  }

  const main = new Splide(mainEl, {
    type: 'slide',
    direction: 'ttb',
    height: '409px',
    arrows: false,
    pagination: false,
    drag: true,
    speed: 500,
    rewind: true,
    breakpoints: {
      1023: {
        height: '733px',
      },
    },
  });

  const nav = new Splide(navEl, {
    isNavigation: true,
    arrows: false,
    pagination: false,
    focus: 'center',
    height: '520px',
    perPage: 1,
    wheel: false,
    releaseWheel: true,
  });

  main.sync(nav);
  nav.mount();
  main.mount();

  const track = navEl.querySelector('.splide__track');
  if (track) {
    let wheelLock = false;

    track.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        if (wheelLock) return;

        wheelLock = true;

        const goingDown = e.deltaY > 0;
        nav.go(goingDown ? '>' : '<');

        window.setTimeout(() => {
          wheelLock = false;
        }, 450);
      },
      { passive: false },
    );
  }

  navEl.classList.add('is-initialized');
  mainEl.classList.add('is-initialized');
}

function initCcpSlider(context = document) {
  const roots = Array.from(context.querySelectorAll('[data-tpms-ccp-slider]'));
  roots.forEach((root) => {
    if (root.dataset.ccpInited === '1') return;
    root.dataset.ccpInited = '1';
    initSplide(root);
  });
}

// Auto-init (Storybook / HTML normal)
if (typeof window !== 'undefined' && window.Drupal) {
  window.Drupal.behaviors.tpmsCcpSlider = {
    attach(context) {
      initCcpSlider(context);
    },
  };
}
