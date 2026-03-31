import efemerides from './org-efemerides.twig';

export default {
  title: 'Organisms/Efemerides',
};

export const Default = () =>
  efemerides({
    title: 'Efemerides',
    view_all_label: 'Ver todas',
    view_all_url: '/efemerides',
    featured: {
      title: 'Día Internacional de la Paz',
      heading_level: 3,
      date: '21',
      month: 'Setiembre',
      url: '/efemeride/1',
      description: `Para destacar a las personas literatas y, a quienes durante sus mejores años han dedicado su talento a 
      la creación poética, se celebra el Día de la Poesía Nacional. A través del decreto ejecutivo Nº 25134-C, 
      del 25 de abril de 1996, se declaró esta festividad en homenaje al nacimiento de Jorge Debravo. Debravo, 
      fue un poeta oriundo de Turrialba, nacido en 1938. Humilde, con gran espíritu de lucha, 
      nunca se dejó vencer por la adversidad; falleció a los 29 años, el 4 de agosto de 1967, 
      año en que había ingresado en la Universidad`,
    },
    items: [
      {
        title: 'Día mundial del Alzheimer',
        date: '21',
        month: 'Setiembre',
        url: '/efemeride/2',
      },
      {
        title: 'Día de la persona Sorda',
        date: '21',
        month: 'Setiembre',
        url: '/efemeride/3',
      },
      {
        title: 'Día mundial de la música',
        date: '01',
        month: 'Octubre',
        url: '/efemeride/4',
      },
    ],
  });
