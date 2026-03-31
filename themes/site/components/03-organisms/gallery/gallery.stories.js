import gallery from './gallery.twig';
import galleryData from './gallery.yml';

export default {
  title: 'Organisms/Gallery',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    gallery_title: {
      control: 'text',
      description: 'Título de la galería',
    },
    gallery_button_text: {
      control: 'text',
      description: 'Texto del botón',
    },
    gallery_button_url: {
      control: 'text',
      description: 'URL del botón',
    },
  },
};

const Template = (args) => gallery(args);

export const Default = Template.bind({});
Default.args = galleryData;
