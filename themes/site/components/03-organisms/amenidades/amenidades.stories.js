import butacas from './amenidades.twig';
import amenidades from './amenidades.yml';

export default {
  title: 'Organisms/Amenidades',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => butacas(args);

// Default Story
export const Default = Template.bind({});
Default.args = {
  ...amenidades,
};

// Three Items Story
export const ThreeItems = Template.bind({});
ThreeItems.args = {
  ...amenidades,
  amenidades_items: amenidades.amenidades_items.slice(0, 3),
};
