import textLinksImage from './text-links-image.twig';
import textLinksImageDefaultData from './text-links-image.yml';

export default { 
  title: 'Organisms/Text Links Image',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => textLinksImage(args);

export const Default = Template.bind({});
Default.args = { ...textLinksImageDefaultData };

