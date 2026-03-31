import accordion from './accordion.twig';
import accordionData from './accordion.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Accordion',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => accordion(args);

export const Default = Template.bind({});
Default.args = {
  ...accordionData,
};
