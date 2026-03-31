import butacas from './servicios-extras.twig';
import serviciosExtra from './servicios-extras.yml';

export default {
  title: 'Organisms/Servicios extras',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => butacas(args);

// Default Story
export const Default = Template.bind({});
Default.args = {
  ...serviciosExtra,
};

// Three Items Story
export const ThreeItems = Template.bind({});
ThreeItems.args = {
  ...serviciosExtra,
  servicios_extra_items: serviciosExtra.servicios_extra_items.slice(0, 3),
};
