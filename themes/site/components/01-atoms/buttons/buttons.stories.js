import button from './button.twig';

import buttonPrimaryData from './button-primary.yml';
import buttonSecondaryData from './button-secondary.yml';
import buttonTertiaryData from './button-tertiary.yml';
import buttonCtaData from './button-cta.yml';
import buttonResizer14Data from './button-resizer-14px.yml';
import buttonDownloadData from './button-download.yml';
import buttonMiniData from './button-mini.yml';
import buttonTertiaryBorderData from './button-tertiary-border.yml';
/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

const Template = (args) => button(args);

export const Primary = Template.bind({});
Primary.args = { ...buttonPrimaryData };

export const Secondary = Template.bind({});
Secondary.args = { ...buttonSecondaryData };

export const Tertiary = Template.bind({});
Tertiary.args = { ...buttonTertiaryData };

export const TertiaryBorder = () => button(buttonTertiaryBorderData);

export const Resizer14px = Template.bind({});
Resizer14px.args = { ...buttonResizer14Data };

export const ButtonMini = () => button(buttonMiniData);

export const Link = Template.bind({});
Link.args = { ...buttonCtaData };

export const Download = Template.bind({});
Download.args = { ...buttonDownloadData };
