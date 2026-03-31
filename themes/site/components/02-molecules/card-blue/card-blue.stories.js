import cardBlue from './card-blue.twig';

export default {
  title: 'Molecules/Card Blue',
};

const image = {
  src: 'https://picsum.photos/600/400?random=8',
  alt: 'Imagen de prueba',
};

export const Default = () =>
  cardBlue({
    title: 'Taller Nacional de Danza',
    url: '#',
    image,
  });

export const Hover = () =>
  cardBlue({
    title: 'Taller Nacional de Danza',
    url: '#',
    image,
    is_hover: true,
  });

export const Disabled = () =>
  cardBlue({
    title: 'Taller Nacional de Danza',
    image,
    is_disabled: true,
  });
