import Twig from 'twig';
import { setupTwig } from './setupTwig';

// GLOBAL CSS
import '../components/style.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import './_drupal.js';

import Splide from '@splidejs/splide';
window.Splide = Splide;
import '../dist/js/03-organisms/tpms-sliders/splide.js';
import '../dist/js/03-organisms/accordion/accordion.js';
import '../dist/assets/scripts/filtros.js';
// Configuración de Twig para Emulsify
setupTwig(Twig);

// Decoradores modernos
export const decorators = [
  (StoryFn) => {
    const story = StoryFn();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const root =
          document.getElementById('storybook-root') ||
          document.getElementById('root') ||
          document.body;

        if (
          window.Drupal &&
          typeof window.Drupal.attachBehaviors === 'function'
        ) {
          window.Drupal.attachBehaviors(root);
        }
      });
    });

    return story;
  },
];

// Parámetros globales de Storybook
export const parameters = {
  viewport: {
    viewports: {
      small: {
        name: 'Pequeña (375×667)',
        styles: { width: '375px', height: '667px' },
      },
      medium: {
        name: 'Mediana (768×1024)',
        styles: { width: '768px', height: '1024px' },
      },
      large: {
        name: 'Grande (1280×800)',
        styles: { width: '1280px', height: '800px' },
      },
      xlarge: {
        name: 'Extra grande (1920×1080)',
        styles: { width: '1920px', height: '1080px' },
      },
    },
    defaultViewport: 'responsive',
  },
};

// Habilitar autodocs en las historias
export const tags = ['autodocs'];
