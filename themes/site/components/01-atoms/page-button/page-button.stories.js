import pageButton from './page-button.twig';
import pageButtonData from './page-button.yml';

export default {
  title: 'Atoms/Page Button',
  argTypes: {
    number: { control: 'number' },
    modifier: { control: 'text' },
  },
};

const Template = (args) => pageButton(args);

export const Default = Template.bind({});
Default.args = {
  ...pageButtonData,
};
