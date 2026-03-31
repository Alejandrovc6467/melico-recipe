import ShareUrlTwig from './share-url-list.twig';
import ShareUrlData from './share-url-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/ShareUrlList' };

export const ShareUrl = () => ShareUrlTwig(ShareUrlData);
