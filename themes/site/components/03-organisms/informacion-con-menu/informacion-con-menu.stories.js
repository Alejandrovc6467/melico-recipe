import informacionConMenu from './informacion-con-menu.twig';
import informacionConMenuData from './informacion-con-menu.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Informacion con menu',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      description: 'Título principal del contenido',
      control: 'text',
    },
    description: {
      description: 'Descripción o contenido HTML',
      control: 'text',
    },
    items: {
      description: 'Array de items con title y url para el menú',
      control: 'object',
    },
  },
};

const Template = (args) => informacionConMenu(args);

export const Default = Template.bind({});
Default.args = { ...informacionConMenuData };

