import ListColumTwig from './list-colum.twig';

export default { title: 'Molecules/ListColum' };

export const ListColum = () =>
  ListColumTwig({
    title:
      'Se reúne de manera ordinaria dos veces al año con los siguientes fines:',
    subtitle: `Consejo Nacional de Juventudes`,
    items: [
      {
        content: `Dar seguimiento, como jerarcas ministeriales, al cumplimiento por parte de los ministerios e instituciones sobre la aplicación de las políticas públicas de juventud; de conformidad con el monitoreo realizado por el Consejo de la Persona Joven, según el artículo 12 de la Ley General de la Persona Joven.`,
      },
      {
        content: `Conocer y analizar los impactos de Políticas Públicas, programas, proyectos o iniciativas de los ministerios e instituciones, ajenas a la Política Pública de la Persona Joven, que afecten positiva o negativamente a las personas jóvenes.`,
      },
      {
        content: `Conocer las iniciativas presentadas por los sectores organizados de las juventudes.`,
      },
    ],
  });
