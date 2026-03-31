import link from './link/link.twig';
import linkData from './link/link.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Links/Link',
};

export const Default = () => link(linkData);
