import archivosAdjuntos from './archivos-adjuntos.twig';
import archivosAdjuntosData from './archivos-adjuntos.yml';

/**
 * Storybook Definition
 */
export default {
  title: 'Organisms/Archivos Adjuntos',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => archivosAdjuntos(args);

export const Default = Template.bind({});
Default.args = { ...archivosAdjuntosData };
