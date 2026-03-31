import cardListTwig from './card-list.twig';
import cardListData from './card-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Cards List' };

export const cardList = () => cardListTwig(cardListData);
