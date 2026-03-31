import cta from './cta.twig';
import ctaData from './cta.yml';

export default {
  title: 'Molecules/CTA',
  argTypes: {
    modifier: {
      control: { type: 'select' },
      options: ['default', 'rectangular', 'dark'],
    },
    heading_level: { control: 'number' },
    heading_text: { control: 'text' },
    heading_url: { control: 'text' },
    content: { control: 'text' },
    button_content: { control: 'text' },
    button_url: { control: 'text' },
    button_is_download: { control: 'boolean' },
    button_icon: { control: 'text' },
    tagline: { control: 'text' },
    image: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => cta(args);

export const Default = Template.bind({});
Default.args = { ...ctaData };

export const Contractors = Template.bind({});
Contractors.args = {
  modifier: 'dark',
  intro_text: 'Lorem Ipsum dolor sit amet',
  heading_text: 'GUIA PARA CONTRATISTAS',
  heading_level: 2,
  content:
    'Esta guía es un documento complementario del contrato; parte integral del mismo. Tiene como objetivo resaltar algunos puntos relevantes ya expuestos con anterioridad en el contrato para el uso de las instalaciones del Teatro Popular Melico Salazar. Consulte la guía',
  button_content: 'TARIFAS 2024',
  button_url: 'button_url',
  button_modifiers: ['secondary'],
};

export const RectangularImage = Template.bind({});
RectangularImage.args = {
  modifier: 'rectangular',
  heading_text: 'Premios Nacionales de Cultura',
  heading_level: 2,
  image: 'https://picsum.photos/1074/533?random=3',
  button_content: 'VER PREMIOS',
  button_url: '#',
  button_modifiers: ['tertiary'],
};