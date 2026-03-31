/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-var */
(($) => {
  Drupal.behaviors.initSplide = {
    attach(context) {

      // Historia slider
      const historiaSlider = context.querySelector(
        '.historia-slider .splide',
      );
      if (
        historiaSlider &&
        !historiaSlider.classList.contains('is-initialized')
      ) {
        const splideInstance = new Splide(historiaSlider, {
          type: 'loop',
          role: 'presentation',
          perPage: 2,
          gap: '16px',
          arrows: false,
          pagination: false,
          focus: 'left',
          trimSpace: false,
          mediaQuery: 'min',
          fixedWidth: '256px',
          wheel: true,
          wheelSleep: 800,
          breakpoints: {
            768: {
              perPage: 3,
              gap: '137px',
            },
            1024: {
              perPage: 4,
              fixedWidth: '286px',
            },
          },
        }).mount();
        
        historiaSlider.classList.add('is-initialized');

        // Función para actualizar el elemento activo
        function updateActiveSlide() {
          // Remover todas las clases activas de los cards
          const allSlides = historiaSlider.querySelectorAll('.splide__slide');
          allSlides.forEach(slide => {
            const cardHistoria = slide.querySelector('.card-historia');
            if (cardHistoria) {
              cardHistoria.classList.remove('card-historia--active');
            }
          });

          // Agregar clase activa al card del primer slide visible
          const activeIndex = splideInstance.index;
          const activeSlide = splideInstance.Components.Slides.getAt(activeIndex);
          
          if (activeSlide && activeSlide.slide) {
            const cardHistoria = activeSlide.slide.querySelector('.card-historia');
            if (cardHistoria) {
              cardHistoria.classList.add('card-historia--active');
            }
          }
        }

        // Inicializar el primer elemento como activo
        updateActiveSlide();

        // Actualizar en cada movimiento del slider
        splideInstance.on('moved', updateActiveSlide);

        // Conectar botones personalizados con Splide
        const prevButton = context.querySelector('.historia-slider__arrow--prev');
        const nextButton = context.querySelector('.historia-slider__arrow--next');

        if (prevButton) {
          prevButton.addEventListener('click', () => {
            splideInstance.go('<');
          });
        }

        if (nextButton) {
          nextButton.addEventListener('click', () => {
            splideInstance.go('>');
          });
        }
      }

      // Billboard slider
      const billboardslider = context.querySelector(
        '.billboard-slider .splide',
      );
      if (
        billboardslider &&
        !billboardslider.classList.contains('is-initialized')
      ) {
        new Splide(billboardslider, {
          type: 'loop',
          role: 'presentation',
          focus: 'left',
          perPage: 1,
          arrows: true,
          gap: '15px',
          pagination: false,
          mediaQuery: 'min',
          breakpoints: {
            768: {
              perPage: 2,
              gap: '30px',
            },
            1024: {
              perPage: 3,
              fixedWidth: '464px',
            },
          },
        }).mount();
        billboardslider.classList.add('is-initialized');
      }

      // Slider de eventos
      const el = context.querySelector('.events-slider .splide');
      if (el && !el.classList.contains('is-initialized')) {
        new Splide(el, {
          type: 'loop',
          role: 'presentation',
          focus: 'right',
          perPage: 1,
          arrows: true,
          gap: '0.25rem',
          padding: { left: '12px' },
          mediaQuery: 'min',
          breakpoints: {
            768: {
              // desde 768 px en adelante
              perPage: 2,
              focus: 'center',
              padding: { left: '0' },
              gap: '1.5rem',
            },
            1024: {
              // desde 1024 px en adelante
              perPage: 3,
            },
          },
        }).mount();
        el.classList.add('is-initialized');
      }

      // Melico Hero Slider
      const melicoEl = context.querySelector('.melico-hero-slider .splide');
      if (melicoEl && !melicoEl.classList.contains('is-initialized')) {
        const splide = new Splide(melicoEl, {
          type: 'loop',
          role: 'presentation',
          focus: 'center',
          perPage: 1,
          arrows: true,
          pagination: true,
        });

        const sliderWrap = melicoEl.closest('.melico-hero-slider');
        const bottom = sliderWrap
          ? sliderWrap.querySelector('.melico-hero-slider__bottom')
          : null;

        const updateBottom = (index) => {
          if (!bottom) return;

          const slideObj = splide.Components.Slides.getAt(index);
          const slideEl = slideObj ? slideObj.slide : null;
          if (!slideEl) return;

          const d = slideEl.dataset;

          const elTitle = bottom.querySelector('.melico-hero-slider__title');
          const elVenue = bottom.querySelector('.melico-hero-slider__venue');
          const elDate = bottom.querySelector('.melico-hero-slider__date');

          if (elTitle) elTitle.textContent = d.title || '';
          if (elVenue) elVenue.textContent = d.venue || '';
          if (elDate) elDate.textContent = d.date || '';

          // botones (wrappers que te dije en twig)
          const moreWrap = bottom.querySelector('[data-action="more"]');
          const ticketsWrap = bottom.querySelector('[data-action="tickets"]');

          const setBtn = (wrap, url, label) => {
            if (!wrap) return;
            const a = wrap.querySelector('a');
            if (!a) return;

            const hasUrl = !!url;
            const wrapStyle = wrap.style;

            wrapStyle.display = hasUrl ? '' : 'none';
            a.href = hasUrl ? url : '#';
            if (label) a.textContent = label;
          };

          setBtn(moreWrap, d.moreUrl, d.moreLabel);
          setBtn(ticketsWrap, d.ticketsUrl, d.ticketsLabel);
        };

        splide.on('mounted move', () => updateBottom(splide.index));

        splide.mount();
        melicoEl.classList.add('is-initialized');
      }

      // Slideshow principal
      const slideshowEl = context.querySelector('.slider-slideshow .splide');
      if (slideshowEl && !slideshowEl.classList.contains('is-initialized')) {
        new Splide(slideshowEl, {
          type: 'fade',
          role: 'presentation',
          focus: 'center',
          perPage: 1,
          arrows: false,
          pagination: true,
        }).mount();
        slideshowEl.classList.add('is-initialized');
      }

      // Carrusel doble sincronizado
      const mainCarousel = context.querySelector('#main-slider.splide');
      const thumbCarousel = context.querySelector('#thumbnail-slider.splide');
      if (
        mainCarousel &&
        thumbCarousel &&
        !mainCarousel.classList.contains('is-initialized') &&
        !thumbCarousel.classList.contains('is-initialized')
      ) {
        const main = new Splide(mainCarousel, {
          type: 'fade',
          role: 'presentation',
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        });

        const thumbnails = new Splide(thumbCarousel, {
          type: 'loop',
          role: 'presentation',
          autoWidth: true,
          autoHeight: true,
          updateOnMove: true,
          speed: 1000,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
          trimSpace: true,
          rewind: true,
          isNavigation: true,
          gap: 30,
          focus: 'left',
          pagination: false,
          cover: true,
          dragMinThreshold: { mouse: 4, touch: 10 },
          breakpoints: {
            640: { fixedWidth: 66, fixedHeight: 38 },
            992: { gap: 15 },
          },
        });
        // Sincronizar y montar ambos
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
        // Marcar inicializados
        mainCarousel.classList.add('is-initialized');
        thumbCarousel.classList.add('is-initialized');
      }
    },
  };
})(jQuery);
