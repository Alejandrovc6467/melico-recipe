import theatreSeatsCta from './theatre-seats-cta.twig';
import theatreSeatsCtaData from './theatre-seats-cta.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Theatre Seats',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'medium'],
      description: 'Grid layout size variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
};

export const Default = () => theatreSeatsCta(theatreSeatsCtaData.default);
