import cardHistoria from './card-historia.twig';
import cardHistoriaData from './card-historia.yml';

export default { 
  title: 'Molecules/Card Historia',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => cardHistoria(args);

export const Default = Template.bind({});
Default.args = { ...cardHistoriaData };

export const Active = Template.bind({});
Active.args = {
  ...cardHistoriaData,
  card_historia__modifiers: ['active'],
};