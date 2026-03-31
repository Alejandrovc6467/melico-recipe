import gridFondosConc from './grid-fondos-conc.twig';
import gridFondosConcData from './grid-fondos-conc.yml';

export default {
  title: 'Organisms/Grid Fondos Concursables',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () =>
  gridFondosConc({
    items: gridFondosConcData.items,
  });
