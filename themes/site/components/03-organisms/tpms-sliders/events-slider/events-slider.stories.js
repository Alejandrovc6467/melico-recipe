import eventsSlider from './events-slider.twig';

/**
 * Storybook Definition for Events Slider
 */
export default {
  title: 'Organisms/TPMS Sliders/Events Slider',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => eventsSlider(args);

export const Default = Template.bind({});
Default.args = {
  view_more_text: 'VER MÁS',
  slider_items: [
    {
      image: 'https://picsum.photos/seed/event1/424/280',
      large_title: 'Concierto de Música Folclórica',
      date: 'ene 15 - ene 20, 2025',
      url: '/evento/concierto-musica-folclorica',
      // Simulando categorías sin iconify_field
      categorias: null,
    },
    {
      image: 'https://picsum.photos/seed/event2/424/280',
      large_title: 'Exposición de Arte Contemporáneo',
      date: 'ene 18 - feb 10, 2025',
      url: '/evento/exposicion-arte-contemporaneo',
      categorias: null,
    },
    {
      image: 'https://picsum.photos/seed/event3/424/280',
      large_title: 'Festival de Teatro Nacional',
      date: 'ene 22 - ene 28, 2025',
      url: '/evento/festival-teatro-nacional',
      categorias: null,
    },
    {
      image: 'https://picsum.photos/seed/event4/424/280',
      large_title: 'Taller de Danza Tradicional',
      date: 'feb 1 - feb 5, 2025',
      url: '/evento/taller-danza-tradicional',
      categorias: null,
    },
    {
      image: 'https://picsum.photos/seed/event5/424/280',
      large_title: 'Cine al Aire Libre',
      date: 'feb 8 - feb 15, 2025',
      url: '/evento/cine-aire-libre',
      categorias: null,
    },
  ],
};
