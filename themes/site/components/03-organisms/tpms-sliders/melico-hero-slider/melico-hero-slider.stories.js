// components/03-organisms/tpms-sliders/melico-hero-slider/melico-hero-slider.stories.js

import '../splide';
import melicoHeroSlider from './melico-hero-slider.twig';

export default {
  title: 'Organisms/Sliders/MelicoHeroSlider',
  parameters: {
    // drupal: { libraries: ['mcj/splide'] },
  },
  args: {
    aria_label: 'Eventos destacados del Teatro Melico',
    slides: [
      {
        image: 'https://picsum.photos/800/400?random=1',
        image_alt: 'Orquesta Filarmónica de Costa Rica',
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
        image: 'https://picsum.photos/1440/520?random=3',
        image_alt: 'Obra de teatro contemporáneo',
        title: 'Noche de Teatro Contemporáneo',
        venue: 'Teatro Popular Melico Salazar',
        date_range: '20 Mar, 2024',
        more_url: '#',
        more_label: 'Ver más',
        tickets_url: '#',
        tickets_label: 'Comprar entradas',
      },
    ],
  },
};

const Template = (args) => melicoHeroSlider(args);

export const Default = Template.bind({});
Default.args = {};
