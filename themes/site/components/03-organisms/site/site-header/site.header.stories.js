import siteHeaderTwig from './site-header.twig';
import siteHeaderData from './site-header.yml';

/**
 * Storybook Definition for Site Header
 */
export default {
  title: 'Organisms/Site/Site Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => {
  return siteHeaderTwig({
    ...siteHeaderData,
    directory: null,
  });
};
