import link from './item-menu.twig';
import linkData from './item-menu.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/ItemMenu',
};

export const Default = () => link(linkData);
