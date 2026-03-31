import historiaSlider from './historia-slider.twig';
import historiaSliderData from './historia-slider.yml';

export default { 
  title: 'Organisms/TPMS Sliders/Historia Slider',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => historiaSlider(args);

export const Default = Template.bind({});
Default.args = { ...historiaSliderData };