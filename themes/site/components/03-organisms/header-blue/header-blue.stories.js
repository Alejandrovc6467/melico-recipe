import headerBlue from './header-blue.twig';
import headerBlueData from './header-blue.yml';

export default {
  title: 'Organisms/Header Blue',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => headerBlue(headerBlueData);
