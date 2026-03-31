import galeriaEspacios from './galeria-espacios.twig';
import galeriaEspaciosData from './galeria-espacios.yml';

export default {
  title: 'Organisms/Galeria Espacios',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => galeriaEspacios(args);

// Default Story - Full gallery with 6 spaces
export const Default = Template.bind({});
Default.args = {
  ...galeriaEspaciosData,
};
