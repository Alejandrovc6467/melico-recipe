import netflixSlider from './netflix-slider.twig';

export default {
  title: 'Organisms/SplideDoubleCarousel',
  parameters: {
    // Si tu Storybook carga Librerías de Drupal, aquí podrías adjuntar la librería tpms/splide
    // drupal: { libraries: ['tpms/splide'] },
  },
  args: {
    cta: {
      title: 'Conozca nuestras instituciones',
      body: 'Sabías que el Ministerio de Cultura y Juventud de Costa Rica es una sombrilla de diferentes instituciones y  programas como Museos, Bibliotecas, Teatros ¡y más! ',
      url: {
        text: 'ver todas',
        uri: 'https://example.com',
      },
    },
    items: [
      {
        image: {
          url: 'https://picsum.photos/800/400?random=1',
          alt: 'Slide 1',
        },
        category: 'Museos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=2',
          alt: 'Slide 2',
        },
        category: 'Bandas',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=3',
          alt: 'Slide 3',
        },
        category: 'Teatros',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=4',
          alt: 'Slide 4',
        },
        category: 'Programas Artísticos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=5',
          alt: 'Slide 5',
        },
        category: 'Centros Culturales',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=6',
          alt: 'Slide 6',
        },
        category: 'Bibliotecas',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=7',
          alt: 'Slide 7',
        },
        category: 'Sitios Arqueológicos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=8',
          alt: 'Slide 8',
        },
        category: 'Museos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=9',
          alt: 'Slide 9',
        },
        category: 'Museos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=10',
          alt: 'Slide 10',
        },
        category: 'Museos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=11',
          alt: 'Slide 11',
        },
        category: 'Museos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=12',
          alt: 'Slide 12',
        },
        category: 'Museos',
      },
      {
        image: {
          url: 'https://picsum.photos/800/400?random=13',
          alt: 'Slide 13',
        },
        category: 'Museos',
      },
    ],
  },
};

const Template = (args) => netflixSlider(args);

export const SyncedCarousels = Template.bind({});
SyncedCarousels.args = {};
