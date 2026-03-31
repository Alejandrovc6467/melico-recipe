// tpms-sliders.stories.js
import './splide';

// Slideshow slider
import slideshowSlider from './slideshow-slider/slideshow-slider.twig';
import slideshowSliderData from './slideshow-slider/slideshow-slider.yml';

// Events slider (Agenda Cultural vieja)
import eventsSlider from './events-slider/events-slider.twig';
import eventsSliderData from './events-slider/events-slider.yml';

// Melico hero slider (nuevo)
import melicoHeroSlider from './melico-hero-slider/melico-hero-slider.twig';

export default {
  title: 'Organisms/Sliders',
};

export const Slideshow = () => slideshowSlider(slideshowSliderData);

export const EventsSlider = () => eventsSlider(eventsSliderData);

export const MelicoHeroSlider = () =>
  melicoHeroSlider({
    aria_label: 'Eventos destacados del Teatro Melico',
    slides: [
      {
        image: 'hhttps://picsum.photos/800/400?random=1',
        image_alt: 'Orquesta Sinfónica Nacional y Éditus',
        title: 'Orquesta Sinfónica Nacional y Éditus',
        venue: 'Centro Nacional de la Música',
        date_range: '16 Feb, 24 · 11 Feb, 2024',
        more_url: '#',
        more_label: 'Ver más',
        tickets_url: '#',
        tickets_label: 'Comprar entradas',
      },
      {
        image: 'https://picsum.photos/800/400?random=1',
        image_alt: 'Gala de ballet clásico',
        title: 'Gala de Ballet Clásico',
        venue: 'Teatro Popular Melico Salazar',
        date_range: '05 Mar, 2024',
        more_url: '#',
        more_label: 'Ver más',
        tickets_url: '#',
        tickets_label: 'Comprar entradas',
      },
      {
        image: 'https://picsum.photos/800/400?random=1',
        image_alt: 'Obra de teatro',
        title: 'Noche de Teatro Contemporáneo',
        venue: 'Teatro Popular Melico Salazar',
        date_range: '20 Mar, 2024',
        more_url: '#',
        more_label: 'Ver más',
        tickets_url: '#',
        tickets_label: 'Comprar entradas',
      },
    ],
  });
