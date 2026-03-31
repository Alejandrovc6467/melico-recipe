// Search Stories
import search from './search-inline.twig';

import searchData from './search.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Search' };

export const Search = () => search(searchData);
