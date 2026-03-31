// Text Image
import BasicCardTwig from './basic-card.twig';

import BasicCardData from './basic-card.yml';
import BasicCardEventData from './basic-card-event.yml';
import BasicCardNewsData from './basic-card-news.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Basic Card' };

export const BasicCard = () => BasicCardTwig(BasicCardData);

export const BasicCardEvent = () => BasicCardTwig(BasicCardEventData);
export const BasicCardNews = () => BasicCardTwig(BasicCardNewsData);
export const BasicCardNewsHorizontal = () =>
  BasicCardTwig({
    basic_card__modifiers: ['news-horizontal'],
    card__image__src: 'https://picsum.photos/seed/news-horizontal/300/200',
    card__image__alt: 'Ejemplo de imagen horizontal',
    card__title: 'Noticia con diseño horizontal',
    card__date: '8 mayo 2025',
    card__category: 'Noticias',
    card__url: '#',
  });
