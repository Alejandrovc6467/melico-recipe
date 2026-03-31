import mediaResources from './media-resources.twig';
import mediaResourcesData from './media-resources.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Media Resources',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => mediaResources(args);

export const Default = Template.bind({});
Default.args = {
  ...mediaResourcesData,
};
