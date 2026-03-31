import spacing from './spacing.twig';
import spacingData from './spacing.yml';

export default {
  title: 'Base/Spacing',
};

export const Tokens = () => spacing(spacingData);
