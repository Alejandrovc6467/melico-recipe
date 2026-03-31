import cardReparto from './card-reparto.twig';
import cardRepartoData from './card-reparto.yml';

/**
 * Storybook Definition for Card Reparto Component
 */
export default {
  title: 'Molecules/Card Reparto',
  parameters: {
    layout: 'padded',
  },
};

export const Default = () => cardReparto(cardRepartoData);

export const EquipoArtistico = () =>
  cardReparto({
    card_title: 'Equipo artístico:',
    card_item: [
      'Dirección musical: Nicola Luisotti'
    ],
  });
