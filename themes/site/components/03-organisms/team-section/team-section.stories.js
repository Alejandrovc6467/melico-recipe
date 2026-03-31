import teamSection from './team-section.twig';
import teamSectionData from './team-section.yml';

export default {
  title: 'Organisms/Team Section',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => teamSection(teamSectionData);
