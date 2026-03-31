import TextBlockX2ImagenTwig from './text-block-x2-imagen.twig';

export default { title: 'Molecules/TextBlockX2Imagen' };

export const TextBlockX2Imagen = () =>
  TextBlockX2ImagenTwig({
    title: 'Conozca nuestro trabajo en el área de Juventudes',
    content: `Desde el Ministerio de Cultura y Juventud, nos 
              encargamos de promover e incentivar la producción y 
              difusión cultural y artísticas; rescatar y conservar el 
              respeto por nuestro patrimonio; y la creación de espacios y 
              oportunidades para la participación de las juventudes. Descubra cómo lo logramos.`,
    image: {
      src: 'https://picsum.photos/seed/featured-news/400/400',
      alt: 'Ejemplo cuadrado',
    },
  });
