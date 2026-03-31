import contacto from './contacto.twig';

export default {
  title: 'Organisms/Contacto',
  argTypes: {
    title: { control: 'text' },
    direccion: { control: 'text' },
    telefonos: { control: 'array' },
    correo: { control: 'text' },
    persona_nombre: { control: 'text' },
    persona_puesto: { control: 'text' },
    horario: { control: 'text' },
    apartado_postal: { control: 'text' },
    redes: { control: 'object' },
  },
};

const Template = (args) => contacto(args);

export const Default = Template.bind({});
Default.args = {
  title: 'Contáctenos',
  direccion: `Vorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, 
    risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
    sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
    Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus `,
  telefonos: ['+506 2255 3188 ext 147', '+506 2256 8315'],
  correo: 'lorempisum@mcj.go.cr',
  persona_nombre: 'Loremlipsum Alfaro',
  persona_puesto: 'Coordinadora',
  horario: 'De Lunes a Viernes de 8:00 a.m. a 4:00 p.m.',
  apartado_postal: '10227–1000 San José',
  redes: [
    { icono: 'facebook', url: '#' },
    { icono: 'instagram', url: '#' },
    { icono: 'x', url: '#' },
    { icono: 'youtube', url: '#' },
  ],
};
