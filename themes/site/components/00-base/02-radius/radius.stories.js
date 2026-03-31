import radius from './radius.twig';
import radiusData from './radius.yml';

export default {
  title: 'Base/Radius',
};

export const Radii = () => radius(radiusData);
