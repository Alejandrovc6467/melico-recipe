import documentosAdjuntos from './documentos-adjuntos.twig';
import documentosAdjuntosData from './documentos-adjuntos.yml';

export default {
  title: 'Organisms/Documentos Adjuntos',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => documentosAdjuntos(args);

export const Default = Template.bind({});
Default.args = { ...documentosAdjuntosData };

// Variante sin section-margin
export const SinSectionMargin = Template.bind({});
SinSectionMargin.args = {
  ...documentosAdjuntosData,
  documentos_section_margin: false,
};
