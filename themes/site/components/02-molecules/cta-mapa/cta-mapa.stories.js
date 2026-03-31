import ctaMapa from './cta-mapa.twig';

export default {
  title: 'Molecules/CTA Mapa',
  argTypes: {
    modifier: {
      control: 'text',
      options: ['dark'],
    },
    content: { control: 'text' },
    button_content: { control: 'text' },
    button_url: { control: 'text' },
    button_icon: { control: 'text' },
    button_modifiers: { control: 'array' },
    mapa: { control: 'text' },
  },
};

const Template = (args) => ctaMapa(args);

export const Default = Template.bind({});
Default.args = {
  modifier: 'dark',
  content:
    'Te apoyamos en tus iniciativas culturales con asesoramiento y recursos.',
  button_content: 'ABRIR MAPA',
  button_url: '#',
  button_modifiers: ['secondary'],
  button_icon: '',
  mapa: `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0785781746796!2d-84.08174068465542!3d9.92806939290536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fae62b7ab5e3%3A0xa4c037dff5f963c!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1719444200000!5m2!1ses!2scr"
    width="100%"
    height="400"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>`,
};
