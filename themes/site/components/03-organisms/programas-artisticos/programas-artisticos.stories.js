import programasArtisticos from './programas-artisticos.twig';

export default {
  title: 'Organisms/Programas Artísticos',
};

const items = [
  {
    title: 'Taller Nacional de Danza',
    url: '#',
    image: { src: 'https://picsum.photos/800/600?random=11', alt: '' },
  },
  {
    title: 'Compañía Nacional de Teatro',
    url: '#',
    image: { src: 'https://picsum.photos/800/600?random=12', alt: '' },
  },
  {
    title: 'Taller Nacional de Danza',
    url: '#',
    image: { src: 'https://picsum.photos/800/600?random=13', alt: '' },
  },
  {
    title: 'Taller Nacional de Teatro',
    url: '#',
    image: { src: 'https://picsum.photos/800/600?random=14', alt: '' },
  },
  {
    title: 'ProArtes',
    url: '#',
    image: { src: 'https://picsum.photos/800/600?random=15', alt: '' },
    is_disabled: true,
  },
];

export const Default = () =>
  programasArtisticos({
    title: 'Programas artísticos',
    items,
  });
