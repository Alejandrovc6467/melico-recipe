import select from './select/select.twig';
import textfields from './textfields/textfields.twig';
import checkbox from './checkbox/checkbox.twig';

import checkboxData from './checkbox/checkbox.yml';
import selectOptionsData from './select/select.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Forms' };

export const textfieldsExamples = () => textfields();

export const selectDropdowns = () => select(selectOptionsData);

export const checkboxes = () => checkbox(checkboxData);
