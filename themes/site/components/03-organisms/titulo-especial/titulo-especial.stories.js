import tituloEspecial from './titulo-especial.twig';
import tituloEspecialData from './titulo-especial.yml';

export default {
  title: 'Organisms/Titulo Especial',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => tituloEspecial(tituloEspecialData);
