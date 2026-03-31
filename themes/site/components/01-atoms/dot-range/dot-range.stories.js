// dot-range.stories.js

import dotRange from './dot-range.twig';
import dotRangeData from './dot-range.yml';

export default {
  title: 'Atoms/Dot Range',
  argTypes: {
    modifier: {
      control: { type: 'select' },
      options: ['', 'active', 'inactive'],
      description: 'Clase modificadora para el wrapper.',
    },
    show_tooltip: {
      control: 'boolean',
      description: 'Mostrar o no el tooltip encima del dot.',
    },
    tooltip_text: {
      control: 'text',
      description: 'Texto del tooltip.',
    },
  },
};

const Template = (args) => dotRange(args);

export const Default = Template.bind({});
Default.args = {
  ...dotRangeData,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  ...dotRangeData,
  show_tooltip: true,
  tooltip_text: '€1.000.000',
};

export const Active = Template.bind({});
Active.args = {
  ...dotRangeData,
  show_tooltip: true,
  tooltip_text: '€1.000.000',
  modifier: 'active',
};

export const Inactive = Template.bind({});
Inactive.args = {
  ...dotRangeData,
  show_tooltip: false,
  modifier: 'inactive',
};
