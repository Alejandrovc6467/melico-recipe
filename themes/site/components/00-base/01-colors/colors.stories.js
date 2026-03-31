import colors from './colors.twig';
import colorsData from './colors.yml';

export default {
  title: 'Base/Colors',
};

export const Palettes = () => colors(colorsData);
