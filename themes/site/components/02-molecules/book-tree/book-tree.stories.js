import bookTree from './book-tree.twig';
import data from './book-tree.yml';

export default {
  title: 'Navigation/Book Tree',
};

export const Default = () => bookTree(data);

export const DeepTree = () =>
  bookTree({
    ...data,
    items: [
      {
        title: 'Chapter 1',
        url: '#',
        below: [
          {
            title: 'Section 1.1',
            url: '#',
            below: [
              {
                title: 'Topic 1.1.1',
                url: '#',
              },
            ],
          },
        ],
      },
    ],
  });
