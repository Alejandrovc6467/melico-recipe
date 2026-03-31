import billboardSlider from './billboard-slider.twig';
import billboardSliderData from './billboard-slider.yml';

/**
 * Storybook Definition for Billboard Slider
 */
export default {
  title: 'Organisms/TPMS Sliders/Billboard Slider',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => billboardSlider(args);

export const Default = Template.bind({});
Default.args = billboardSliderData;
