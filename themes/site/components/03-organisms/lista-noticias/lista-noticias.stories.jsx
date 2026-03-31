import ListaNoticias from './lista-noticias.twig';
/* eslint-disable import/extensions */
import { initFiltros } from '../../../assets/scripts/filtros.js';
/* eslint-enable import/extensions */

export default {
  title: 'Organisms/Lista noticias',
};

const cards = [
  {
    card__image__src: 'https://picsum.photos/id/1011/400/400',
    card__category: 'Cultura',
    card__date: '14 mayo 2025',
    card__title: 'Nueva exposición en el Museo Nacional',
    card__url: '#',
    card__description: `Rorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
  },
  {
    card__image__src: 'https://picsum.photos/id/1025/400/400',
    card__category: 'Arte',
    card__date: '12 mayo 2025',
    card__title: 'Artistas emergentes del Caribe',
    card__url: '#',
    card__description: `Rorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
    card__location: 'Worem ipsum dolor sit amet.',
  },
  {
    card__image__src: 'https://picsum.photos/id/103/400/400',
    card__category: 'Música',
    card__date: '10 mayo 2025',
    card__title: 'Concierto sinfónico al aire libre',
    card__url: '#',
    card__description: `Rorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
    card__location: 'Worem ipsum dolor sit amet.',
  },
  {
    card__image__src: 'https://picsum.photos/id/1040/400/400',
    card__category: 'Danza',
    card__date: '08 mayo 2025',
    card__title: 'Festival nacional de danza contemporánea',
    card__url: '#',
    card__description: `Rorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
  },
  {
    card__image__src: 'https://picsum.photos/id/1067/400/400',
    card__category: 'Cine',
    card__date: '06 mayo 2025',
    card__title: 'Ciclo de cine centroamericano',
    card__url: '#',
    card__description: `Rorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
    card__location: 'Worem ipsum dolor sit amet.',
  },
  {
    card__image__src: 'https://picsum.photos/id/1074/400/400',
    card__category: 'Literatura',
    card__date: '04 mayo 2025',
    card__title: 'Encuentro de narradores costarricenses',
    card__url: '#',
    card__description: `Rorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
    Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
  },
];
const checkboxGroups = [
  {
    title: 'Categorías',
    items: {
      musica: { title: 'Música', checked: true },
      arte: { title: 'Arte', checked: false },
      cultura: { title: 'Cultura', checked: false },
      danza: { title: 'Danza', checked: false },
      cine: { title: 'Cine', checked: false },
      literatura: { title: 'Literatura', checked: false },
    },
  },
  {
    title: 'Regiones',
    items: {
      caribe: { title: 'Caribe', checked: false },
      centroamericana: { title: 'Centroamericana', checked: false },
      latinoamericana: { title: 'Latinoamericana', checked: true },
    },
  },
];

const select = [
  {
    title: 'Test uno',
  },
  {
    title: 'Test dos',
  },
  {
    title: 'Test tres',
  },
];
const demoFilters = true;

const Template = (args) => {
  // Storybook primero pinta el HTML y luego disparas JS
  requestAnimationFrame(() => initFiltros());

  return ListaNoticias(args);
};

export const Default = Template.bind({});
Default.args = {
  cards,
  checkboxGroups,
  select,
  demoFilters,
};
