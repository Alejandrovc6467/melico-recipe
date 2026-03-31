import butacas from './butacas.twig';
import butacasData from './butacas.yml';

export default {
  title: 'Organisms/Butacas',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => butacas(args);

// Default Story
export const Default = Template.bind({});
Default.args = {
  ...butacasData,
};

// Three Items Story
export const ThreeItems = Template.bind({});
ThreeItems.args = {
  ...butacasData,
  butacas_items: butacasData.butacas_items.slice(0, 3),
};
