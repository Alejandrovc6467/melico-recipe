import eventCard from './event-card.twig';
import eventCardData from './event-card.yml';

export default {
  title: 'Molecules/Event Card',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => eventCard(args);

// VERSION DEFAULT (original)
export const Default = Template.bind({});
Default.args = eventCardData.Default;

export const LongTitle = Template.bind({});
LongTitle.args = eventCardData.LongTitle;

export const ShortTitle = Template.bind({});
ShortTitle.args = eventCardData.ShortTitle;

// VERSION SECOND (nueva variante)
export const SecondVersion = Template.bind({});
SecondVersion.args = eventCardData.SecondVersion;

export const SecondVersionLongTitle = Template.bind({});
SecondVersionLongTitle.args = eventCardData.SecondVersionLongTitle;
