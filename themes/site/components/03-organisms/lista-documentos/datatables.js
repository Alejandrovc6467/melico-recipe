/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
(($, Drupal, once) => {
  Drupal.behaviors.miDatatables = {
    attach(context) {
      const docTables = once(
        'miDatatablesDocs',
        '.lista-documentos table',
        context,
      );

      docTables.forEach(function (element) {
        $(element).DataTable({
          paging: false,
          searching: false,
          ordering: true,
          pageLength: 8,
          language: {
            url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/Spanish.json',
          },
          createdRow: function (row) {
            $('td', row).css({
              'max-width': '250px',
              color: '#232323',
              'min-width': '250px',
              'max-height': '100px',
              height: '100px',
              overflow: 'hidden',
              'white-space': 'normal',
              'word-wrap': 'break-word',
              'overflow-wrap': 'break-word',
              'border-bottom': 'solid 1px #DFE1E2',
              'text-align': ' center',
              padding: ' 20px 0',
            });

            $('td a', row).css({
              color: '#000',
              'font-size': '1.5rem',
              display: 'inline-block',
              width: '48px',
              height: '48px',
              'line-height': '2',
              'text-align': 'center',
            });
          },
          headerCallback: function (thead) {
            $('th', thead).css({
              color: '#0034A0',
              'font-weight': '600',
              'font-size': '1rem',
              'line-height': '1.5',
              'text-align': 'center',
              padding: '32px',
              'border-bottom': 'solid 1px #DFE1E2',
            });
          },
          responsive: true,
          info: false,
          initComplete: function (settings) {
            $(settings.nTable).css({
              'margin-bottom': '32px',
              border: 'none',
            });
          },
        });

        $(element).closest('.dataTables_wrapper').css('margin-top', '50px');
      });

      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      const funcTables = once(
        'miDatatablesFuncionarios',
        '.views-funcionarios table, .view-transparencia table',
        context,
      );

      funcTables.forEach(function (element) {
        if ($.fn.dataTable.isDataTable(element)) return;

        $(element).DataTable({
          paging: false,
          searching: false,
          ordering: false,
          info: false,
          pageLength: 8,
          autoWidth: false,
          language: {
            url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/Spanish.json',
          },

          columnDefs: isMobile
            ? [
                { targets: '_all', className: 'none' },
                { targets: 0, className: 'dtr-control', responsivePriority: 1 },
              ]
            : [],

          responsive: isMobile
            ? {
                details: {
                  type: 'inline',
                  target: 'td.dtr-control',
                  renderer: function (api, rowIdx, columns) {
                    const hidden = columns.filter((c) => c.hidden);
                    if (!hidden.length) return false;

                    const html = hidden
                      .map((c) => {
                        const title = c.title ? c.title.trim() : '';
                        const data = c.data ? c.data : '';
                        return `
                          <div class="dtr-row">
                            <strong>${title}</strong>
                            <div>${data}</div>
                          </div>
                        `;
                      })
                      .join('');

                    return $('<div class="dtr-details" />').append(html);
                  },
                },
              }
            : false,

          createdRow: function (row) {
            if (!isMobile) {
              $('td', row).css({
                color: '#454E54',
                'max-height': '120px',
                height: '120px',
                overflow: 'hidden',
                'white-space': 'normal',
                'word-wrap': 'break-word',
                'overflow-wrap': 'break-word',
                'border-bottom': 'solid 1px #C1C5C8',
                padding: '16px 0 37px 0',
              });
              return;
            }

            // ======= MOBILE (nuevo) =======
            $('td', row).css({
              'white-space': 'normal',
              'word-wrap': 'break-word',
              'overflow-wrap': 'anywhere',
            });

            const $cell = $('td.dtr-control', row).first();
            if ($cell.length && !$cell.find('.dt-row-label').length) {
              const original = $cell.html();
              $cell.html(`
                <span class="dt-row-label">Funcionario</span>
                <span class="dt-row-value">${original}</span>
              `);
            }
          },

          headerCallback: function (thead) {
            $('th', thead).css({
              color: '#182951',
              'font-weight': '600',
              'text-align': 'left',
              'border-bottom': 'solid 1px #C1C5C8',
              padding: '0',
              'padding-bottom': '24px',
            });

            if (isMobile) {
              $('th', thead).css({
                'padding-bottom': '12px',
              });
            }
          },

          initComplete: function (settings) {
            const $table = $(settings.nTable);
            const $wrapper = $table.closest('.dataTables_wrapper');

            $table.css({
              'margin-bottom': '32px',
              border: 'none',
              width: '100%',
            });

            $wrapper.css('margin-top', '48px');
          },
        });
      });
    },
  };
})(jQuery, Drupal, once);
