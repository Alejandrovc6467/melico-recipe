import imagenTexto from './imagen-texto.twig';

export default {
  title: 'Organisms/ImagenTexto',
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    image_position: {
      control: { type: 'radio' },
      options: ['izquierda', 'derecha'],
    },
    image_format: {
      control: { type: 'radio' },
      options: ['cuadrada', 'panoramica'],
    },
    size: {
      control: { type: 'radio' },
      options: ['default', 'small'],
    },
    variant: { control: 'text' },
    date_range: { control: 'text' },
    lugar: { control: 'text' },
    institucion: { control: 'text' },
    categoria: { control: 'text' },
    image: {
      control: 'object',
    },
    button: {
      control: 'object',
    },
    links: { control: 'object' },
  },
};

const Template = (args) => imagenTexto(args);

export const textoImage = Template.bind({});
textoImage.args = {
  title: 'Misión',
  content: `Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
  Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.`,
  image_position: 'derecha',
  image_format: 'cuadrada',
  image: {
    src: 'https://picsum.photos/seed/featured-news/394/230',
    alt: 'Ejemplo cuadrado',
  },
};

export const bannerImageContent = Template.bind({});
bannerImageContent.args = {
  title: 'Misión',
  image_position: 'izquierda',
  image_format: 'panoramica',
  date_range: '5 de Mayo al 9 de Mayo',
  lugar: 'Teatro Popular Melico Salazar',
  categoria: ['Danza', 'Artes Escénicas'],
  image: {
    src: 'https://picsum.photos/seed/featured-news/400/400',
    alt: 'Ejemplo cuadrado',
  },
  button: '#cfac65',
  texto_imagen_button_content: 'COMPRAR ENTRADAS',
  texto_imagen_button_url: '#',
};

export const smallVariant = Template.bind({});
smallVariant.args = {
  title: 'Compañía Nacional de Danza',
  content: `<p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>`,
  image_position: 'izquierda',
  image_format: 'panoramica',
  size: 'small',
  date_range: '5 de Mayo al 9 de Mayo',
  lugar: 'Teatro Popular Melico Salazar',
  categoria: ['Danza', 'Artes Escénicas'],
  image: {
    src: 'https://picsum.photos/seed/dance/400/450',
    alt: 'Bailarines en escena',
  },
  button: '#cfac65',
  texto_imagen_button_content: 'COMPRAR ENTRADAS',
  texto_imagen_button_url: '#',
};

export const detalleEvento = Template.bind({});
detalleEvento.args = {
  variant: 'evento',
  title: 'Nombre de la obra',
  institucion: 'Compañía Nacional de Danza',
  content: `<table>
  <tbody>
    <tr>
      <td><strong>Género:</strong> Drama</td>
      <td><strong>Precios Entradas:</strong><br>General: 9,000</td>
    </tr>
    <tr>
      <td><strong>Edad:</strong> +12 años</td>
      <td>General: 10,000</td>
    </tr>
    <tr>
      <td><strong>Autor:</strong> Lorem Ipsum</td>
      <td>General: 12,000</td>
    </tr>
    <tr>
      <td><strong>Director 1:</strong> Lorem Ipsum dolor</td>
      <td>General: 15,000</td>
    </tr>
    <tr>
      <td><strong>Género:</strong> Lorem Ipsum</td>
      <td>General: 25,000</td>
    </tr>
  </tbody>
</table>`,
  image_position: 'izquierda',
  image: {
    src: 'https://picsum.photos/seed/evento-detalle/464/580',
    alt: 'Evento destacado',
  },
  lugar: 'Teatro La Aduana',
  links: [
    {
      title: 'DISTRIBUCIÓN DE BUTACAS',
      url: '#',
    },
    {
      title: 'COMPRAR ENTRADAS',
      url: '#',
    },
  ],
};
