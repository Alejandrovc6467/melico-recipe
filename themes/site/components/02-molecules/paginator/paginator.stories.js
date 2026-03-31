import paginator from './paginator.twig';

export default {
  title: 'Molecules/Paginator',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

const Template = (args) => paginator(args);

// 🔹 Historia base
export const Default = Template.bind({});
Default.args = {
  heading_id: 'pagination-heading',
  pagination_heading_level: 'h2',
  current: 2,
  ellipses: {
    previous: false,
    next: false,
  },
  items: {
    previous: {
      href: '#',
    },
    next: {
      href: '#',
    },
    pages: {
      1: { href: '#' },
      2: { href: '#' },
      3: { href: '#' },
    },
  },
};

// 🔹 Con muchas páginas y elipsis
export const ConEllipsis = Template.bind({});
ConEllipsis.args = {
  heading_id: 'pagination-heading',
  pagination_heading_level: 'h2',
  current: 5,
  ellipses: {
    previous: true,
    next: true,
  },
  items: {
    first: {
      href: '#',
    },
    previous: {
      href: '#',
    },
    next: {
      href: '#',
    },
    last: {
      href: '#',
    },
    pages: {
      3: { href: '#' },
      4: { href: '#' },
      5: { href: '#' },
      6: { href: '#' },
      7: { href: '#' },
    },
  },
};

// 🔹 Solo una página
export const UnaPagina = Template.bind({});
UnaPagina.args = {
  heading_id: 'pagination-heading',
  pagination_heading_level: 'h2',
  current: 1,
  ellipses: {
    previous: false,
    next: false,
  },
  items: {
    pages: {
      1: { href: '#' },
    },
  },
};
