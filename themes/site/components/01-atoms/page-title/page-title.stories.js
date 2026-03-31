import pageTitle from './page-title.twig';
import pageTitleData from './page-title.yml';

export default {
  title: 'Atoms/Page Title',
  argTypes: {
    title: { control: 'text' },
  },
};

const Template = (args) => pageTitle(args);

export const Default = Template.bind({});
Default.args = {
  ...pageTitleData,
};
