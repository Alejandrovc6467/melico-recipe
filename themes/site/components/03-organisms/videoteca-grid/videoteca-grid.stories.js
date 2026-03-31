import videoteca from './videoteca-grid.twig';
import data from './videoteca-grid.yml';

export default {
  title: 'Organisms/VideotecaGrid',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => videoteca(args);

export const Default = Template.bind({});
Default.args = data;
