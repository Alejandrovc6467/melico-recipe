import espacios from './espacios.twig';
import espaciosData from './espacios.yml';

/**
 * Storybook Definition
 */
export default {
  title: 'Organisms/Espacios',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => espacios(args);

// Default - 4 cards
export const Default = Template.bind({});
Default.args = { ...espaciosData.default };

// Many - 8 cards
export const Many = Template.bind({});
Many.args = { ...espaciosData.many };
