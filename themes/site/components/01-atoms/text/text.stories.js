import heading from './headings/_heading.twig';
import paragraph from './text/01-paragraph.twig';

import headingData from './headings/headings.yml';
import paragraphData from './text/paragraph.yml';

export default { title: 'Atoms/Text' };

export const Headings = () => headingData.map((d) => heading(d)).join('');
export const Paragraphs = () =>
  paragraphData.map((item) => paragraph(item)).join('');
// export const text = () => paragraph(paragraphData);
