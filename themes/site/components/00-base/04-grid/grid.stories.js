import grid from './grid.twig';
import gridData from './grid.yml';

export default {
  title: 'Base/Grid',
};

export const GridSystem = () => grid(gridData);
