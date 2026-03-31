import item from './artist-card.twig';
import data from './artist-card.yml';

export default { title: 'Molecules/Artist Card' };
export const ArtistCard = () => item(data);
