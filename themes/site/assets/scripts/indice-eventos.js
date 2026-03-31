/* eslint-disable no-undef */

/**
 * @file
 * Script for the event index sidebar.
 *
 * This script handles the active state of the sidebar links based on the
 * scroll position of the page. It uses jQuery for simplicity and follows
 * Drupal's JavaScript best practices.
 */
(function ($, Drupal, once) {
  'use strict';

  /**
   * Drupal behavior for the event index scroll-spy functionality.
   *
   * @type {Drupal.behavior}
   */
  Drupal.behaviors.indiceEventos = {
    attach: function (context) {
      // Use 'once' to ensure this script only runs once per sidebar container.
      const container = once('indice-eventos', '.sidebar-region', context);
      if (!container.length) {
        return;
      }

      // 1. Find all navigation links that point to an anchor on the page.
      const $links = $(container).find('.book-tree__link[href^="#component-"]');
      if (!$links.length) {
        return; // Exit if no links are found.
      }

      // 2. Map links to their corresponding target elements on the page.
      const targets = $links
        .map(function () {
          const $link = $(this);
          const id = $link.attr('href');
          const $targetElement = $(id);

          if ($targetElement.length) {
            // The scroll position should be determined by the section's main title.
            // If no heading is found, fall back to the section container itself.
            let $anchor = $targetElement.find('h1, h2, h3, h4, h5, h6').first();
            if (!$anchor.length) {
              $anchor = $targetElement;
            }
            return {
              id: $targetElement.attr('id'),
              $link: $link,
              $anchor: $anchor,
            };
          }
          return null;
        })
        .get()
        .filter(Boolean); // Remove any null entries.

      if (!targets.length) {
        return; // Exit if no valid targets were found.
      }

      /**
       * Calculates the combined height of sticky elements at the top of the page,
       * like the admin toolbar or a sticky header.
       * @returns {number} The total vertical offset in pixels.
       */
      const getStickyOffset = () => {
        let offset = 0;
        // Add offset for Drupal's Gin admin toolbar if present.
        const $toolbar = $('#gin-toolbar-bar');
        if ($toolbar.is(':visible')) {
          offset += $toolbar.outerHeight() || 0;
        }
        // Add offset for the theme's sticky header if present.
        const $header = $('.header-region--is-sticky');
        if ($header.is(':visible')) {
          offset += $header.outerHeight() || 0;
        }
        return offset;
      };

      /**
       * This is the core function that determines which link should be active.
       */
      const updateActive = () => {
        // We define a "trigger point" on the screen. A section becomes active
        // when its title scrolls past this point.
        const offset = getStickyOffset();
        // Let's set the trigger point to the vertical center of the visible viewport.
        const triggerPoint = window.scrollY + offset + (window.innerHeight - offset) / 2;

        let activeTarget = null;

        // Loop through the targets to find the currently active one.
        for (const target of targets) {
          // Check if the top of the anchor element has passed the trigger point.
          if (target.$anchor.offset().top < triggerPoint) {
            activeTarget = target;
          } else {
            // Since the targets are sorted by their DOM order, we can stop
            // as soon as we find one that hasn't reached the trigger point yet.
            break;
          }
        }

        // A special case for when the user has scrolled to the very bottom of the page.
        // In this case, the last item should always be active.
        const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2; // 2px buffer
        if (isAtBottom) {
          activeTarget = targets[targets.length - 1];
        }

        // Finally, update the 'is-active' class on the links.
        $links.removeClass('is-active');
        if (activeTarget) {
          activeTarget.$link.addClass('is-active');
        }
      };

      // To improve performance, we "throttle" the scroll event handler using
      // requestAnimationFrame. This ensures 'updateActive' doesn't run on
      // every single pixel of scrolling.
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateActive();
            ticking = false;
          });
          ticking = true;
        }
      };

      // --- Event Listeners ---

      // Listen for scroll and resize events. We use a namespace for easy removal.
      $(window).on('scroll.indiceEventos resize.indiceEventos', onScroll);

      // Also set the active state immediately when a link is clicked.
      $links.on('click.indiceEventos', function () {
        // Defer to allow the browser's scroll-to-anchor to happen first.
        setTimeout(() => {
          $links.removeClass('is-active');
          $(this).addClass('is-active');
        }, 0);
      });
      
      // Set the initial active state when the page loads.
      updateActive();
    },

    /**
     * Detach behavior. This is a Drupal best practice to clean up event
     * listeners when the content is removed from the page.
     */
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        $(window).off('.indiceEventos');
      }
    },
  };
})(jQuery, Drupal, once);