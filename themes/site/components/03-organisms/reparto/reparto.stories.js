import reparto from './reparto.twig';
import repartoData from './reparto.yml';

/**
 * Storybook Definition for Reparto Component
 */
export default {
  title: 'Organisms/Reparto',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => reparto(repartoData);

export const ConDosCards = () =>
  reparto({
    reparto_title: 'REPARTO',
    reparto_cards: [
      {
        title: 'Elenco:',
        item: [
          'Nicola Luisotti Viquez',
          'David McVicar Alfaro',
          'Charles Edwards Cerdas',
        ],
      },
      {
        title: 'Equipo artístico:',
        item: [
          'Dirección musical: Nicola Luisotti',
          'Dirección de escena: David McVicar',
        ],
      },
    ],
  });
