import toggleButton from './toggle-button.twig';
import data from './toggle-button.yml';

export default {
  title: 'Atoms/Toggle Button',
  args: data,
  argTypes: {
    style: {
      control: { type: 'select' },
      options: [
        'icon-padding',
        'stroke-black',
        'stroke-white',
        'fill-white',
        'fill-black',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    icon_name: { control: 'text' },
    is_selected: { control: 'boolean' },
    is_disabled: { control: 'boolean' },
  },
};

export const Default = (args) => toggleButton(args);
