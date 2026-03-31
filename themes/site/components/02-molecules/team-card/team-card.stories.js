import teamCard from './team-card.twig';
import teamCardData from './team-card.yml';

export default {
  title: 'Molecules/Team Card',
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => teamCard(teamCardData);

export const WithDifferentContent = () =>
  teamCard({
    ...teamCardData,
    card_name: 'María González Pérez',
    card_role: 'Directora de Recursos Humanos',
    card_organization: 'Ministerio de Cultura y Juventud',
  });

export const Multiple = () => `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 342px)); gap: 24px; max-width: 1200px;">
    ${teamCard(teamCardData)}
    ${teamCard({
      ...teamCardData,
      card_name: 'Carlos Rodríguez',
      card_role: 'Coordinador de Programas',
      card_organization: 'Centro Nacional de la Música',
    })}
    ${teamCard({
      ...teamCardData,
      card_name: 'Ana Patricia Mora',
      card_role: 'Asesora en Políticas Culturales',
      card_organization: 'Teatro Nacional de Costa Rica',
    })}
  </div>
`;
