import newsList from './news-list.twig';
import newsListData from './news-list.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/News List',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => newsList(newsListData.default);
