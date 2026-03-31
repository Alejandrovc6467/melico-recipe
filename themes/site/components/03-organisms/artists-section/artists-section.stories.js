import section from './artists-section.twig';
import sectionData from './artists-section.yml';

export default { title: 'Organisms/Artists Section' };
export const ArtistsSection = () => section(sectionData);
