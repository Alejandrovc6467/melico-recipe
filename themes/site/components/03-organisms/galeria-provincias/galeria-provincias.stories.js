import galeriaProvincias from './galeria-provincias.twig';

export default {
  title: 'Organisms/Eventos por Provincia',
  parameters: {
    layout: 'centered',
  },
};

const provincias = [
  {
    nombre: 'Cartago',
    imagen:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
  {
    nombre: 'San José',
    imagen:
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
  {
    nombre: 'Heredia',
    imagen:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
  {
    nombre: 'Alajuela',
    imagen:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
  {
    nombre: 'Guanacaste',
    imagen:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
  {
    nombre: 'Limón',
    imagen:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
  {
    nombre: 'Puntarenas',
    imagen:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=640&q=80',
    url: '#',
  },
];

export const Default = () =>
  galeriaProvincias({
    title: 'Galeria Provincia',
    provincias,
  });
