import { Accordion } from 'accordion';

Drupal.behaviors.accordion = {
  attach(context) {
    const accordions = context.querySelectorAll('.js-accordion');

    accordions.forEach((element) => {
      const elementDataset = element.dataset;
      if (elementDataset.accordionInit) return;
      elementDataset.accordionInit = 'true';

      const accordionInstance = new Accordion(element, {
        modal: true,
        openClass: 'is-open',
        closeClass: 'is-closed',
        enabledClass: 'accordion--enabled',
        noTransforms: true,
        heightOffset: 24,
      });

      if (accordionInstance.folds && accordionInstance.folds.length) {
        accordionInstance.folds[
          accordionInstance.folds.length - 1
        ].heightOffset = 2;
        accordionInstance.update();
      }
    });
  },
};
