import component from './video-item.twig';
import data from './video-item.yml';

export default {
  title: 'Molecules/VideoItem',
   parameters: {
    layout: 'centered',
  },
};

const Template = (args) => component(args);

export const Default = Template.bind({});
Default.args = data;