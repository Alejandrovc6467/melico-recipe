/* eslint-disable */
const ROOT_SELECTORS = [
  '.lista-noticias',
  '.lista-eventos',
  '.lista-instituciones',
];

const roots = new Set();
let documentListenerAttached = false;

const getRootElements = (context = document) =>
  ROOT_SELECTORS.flatMap((selector) =>
    Array.from(context.querySelectorAll(selector)),
  );

const getFieldsByName = (root, name) =>
  Array.from(document.getElementsByName(name)).filter((el) =>
    root.contains(el),
  );

const syncCheckboxGroup = (root, field) => {
  const selector = field.getAttribute('data-drupal-selector');
  const targets = selector
    ? root.querySelectorAll(
        `input[type="checkbox"][data-drupal-selector="${selector}"]`,
      )
    : getFieldsByName(root, field.name).filter((el) => el.type === 'checkbox');

  targets.forEach((el) => {
    if (el !== field) {
      el.checked = field.checked;
    }
  });
};

const syncField = (root, field) => {
  if (!field || !field.name) return;

  if (field.type === 'checkbox') {
    syncCheckboxGroup(root, field);
    return;
  }

  if (
    field.tagName === 'SELECT' ||
    field.type === 'text' ||
    field.type === 'search' ||
    field.type === 'email'
  ) {
    const targets = getFieldsByName(root, field.name);
    targets.forEach((el) => {
      if (el !== field) {
        el.value = field.value;
      }
    });
  }
};

const syncAllFields = (root) => {
  root.querySelectorAll('[name]').forEach((field) => {
    syncField(root, field);
  });
};

const getSidebarElements = (root) => ({
  sidebar: root.querySelector('#sidebar'),
  toggleBtn: root.querySelector('#toggleSidebar'),
  closeBtn: root.querySelector('.boton_cerrar'),
});

const handleDocumentClick = (event) => {
  roots.forEach((root) => {
    const { sidebar, toggleBtn } = getSidebarElements(root);

    if (!sidebar || !sidebar.classList.contains('open')) return;

    const insideSidebar = sidebar.contains(event.target);
    const insideToggle = toggleBtn && toggleBtn.contains(event.target);

    if (!insideSidebar && !insideToggle) {
      sidebar.classList.remove('open');
    }
  });
};

const ensureDocumentListener = () => {
  if (documentListenerAttached) return;
  document.addEventListener('click', handleDocumentClick);
  documentListenerAttached = true;
};

const wireExternalSubmit = (root) => {
  root.addEventListener('click', (event) => {
    const submit = event.target.closest(
      '.actions-custom input[type="submit"], .actions-custom button[type="submit"]',
    );

    if (!submit || submit.closest('form')) return;

    const formId = submit.getAttribute('form');
    const form = formId
      ? document.getElementById(formId)
      : root.querySelector('form[data-drupal-selector^="views-exposed-form-"]');

    if (!form) return;

    event.preventDefault();
    form.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true }),
    );
  });
};

const wireReset = (root) => {
  root.addEventListener('click', (event) => {
    const reset = event.target.closest(
      '[name="reset"], [data-drupal-selector^="edit-reset-"]',
    );
    if (!reset) return;

    const form = reset.closest('form');
    if (!form) return;

    form.reset();
    syncAllFields(root);
  });
};

const initRoot = (root) => {
  if (!root || root.dataset.filtrosInit === 'true') return;
  root.dataset.filtrosInit = 'true';

  const { sidebar, toggleBtn, closeBtn } = getSidebarElements(root);

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (event) => {
      event.preventDefault();
      sidebar.classList.toggle('open');
    });
  }

  if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      sidebar.classList.remove('open');
    });
  }

  root.addEventListener('input', (event) => {
    syncField(root, event.target);
  });
  root.addEventListener('change', (event) => {
    syncField(root, event.target);
  });

  wireExternalSubmit(root);
  wireReset(root);

  roots.add(root);
  ensureDocumentListener();
};

const initAll = (context = document) => {
  getRootElements(context).forEach(initRoot);
};

if (typeof Drupal !== 'undefined' && Drupal.behaviors) {
  Drupal.behaviors.tpmsFiltros = {
    attach(context) {
      initAll(context);
    },
  };
} else {
  if (document.readyState !== 'loading') {
    initAll(document);
  } else {
    document.addEventListener('DOMContentLoaded', () => initAll(document));
  }
}

export { initAll };
