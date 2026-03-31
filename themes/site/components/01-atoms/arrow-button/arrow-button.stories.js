import arrowButton from './arrow-button.twig';
import arrowButtonData from './arrow-button.yml';

export default {
  title: 'Atoms/Arrow Button',
  argTypes: {
    icon: { control: 'text' },
    aria_label: { control: 'text' },
    modifier: { control: 'text' },
  },
};

const Template = (args) => arrowButton(args);

export const Default = Template.bind({});
Default.args = {
  ...arrowButtonData,
};
