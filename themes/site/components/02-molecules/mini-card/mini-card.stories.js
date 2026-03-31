import MiniCardTwig from './mini-card.twig';
import MiniCardData from './mini-card.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Mini Card',
  parameters: {
    layout: 'fullscreen',
  },
};

export const MiniCard = () => MiniCardTwig(MiniCardData);
