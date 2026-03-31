import contactInfoTwig from './contact-info.twig';
import contactInfoData from './contact-info.yml';

export default {
  title: 'Molecules/Contact Info',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => {
    return contactInfoTwig({
      ...contactInfoData,
    });
  },
};
