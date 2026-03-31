import detalleInstitucion from './detalle-institucion.twig';
import detalleInstitucionData from './detalle-institucion.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Detalle Institución',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => detalleInstitucion(args);

// ============================================================================
// STORIES
// ============================================================================

export const Default = Template.bind({});
Default.args = {
  ...detalleInstitucionData,
};
