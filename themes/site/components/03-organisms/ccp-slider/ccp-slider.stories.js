import ccpSlider from './ccp-slider.twig';
import { initCcpSlider } from './ccp-slider';
import ccpSliderData from './ccp-slider.yml';

export default {
  title: 'Organisms/TPMS Sliders/CCP Slider',
  parameters: { layout: 'fullscreen' },
};

const Template = (args) => ccpSlider(args);

export const Default = Template.bind({});
Default.args = ccpSliderData;

Default.decorators = [
  (Story) => {
    const html = Story();
    setTimeout(() => {
      initCcpSlider(document);
    }, 0);
    return html;
  },
];
