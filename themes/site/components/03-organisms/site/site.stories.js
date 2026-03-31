import footerTwig from './site-footer/site-footer.twig';
import footerMenu from '../../02-molecules/menus/inline/inline-menu.yml';
import footerData from './site-footer/site-footer.yml';
import '../../02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site',
  parameters: {
    layout: 'fullscreen',
  },
};

export const footer = () =>
  footerTwig({
    ...footerMenu,
    ...footerData,
  });
