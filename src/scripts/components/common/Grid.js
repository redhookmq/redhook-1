import $ from 'jquery';
import Isotope from 'isotope-layout';
import packery from 'isotope-packery';

const Grid = function (element) {
  const breakpoint = 800;
  const $window = $(window);
  const $grid = $(element);
  const $content = $grid.find('.grid__content');
  const $items = $grid.find('.grid-item');
  const $ctaBtn = $grid.find('.grid__cta');
  let $isotope;

  const init = function () {
    bind();

    $isotope = new Isotope($grid.find('.grid__content')[0], {
      itemSelector: '.grid-item',
      layoutMode: 'packery',
      percentPosition: true,
      filter: '.is-first'
    });
  };

  const bind = function () {
    $items.each((i, el) => {
      const $el = $(el);
      const $detailMask = $el.find('.grid-item__detail-mask');
      const $detailContent = $el.find('.grid-item__detail-content');

      $el.on('mouseenter', () => {
        $el.addClass('is-hovered');

        if ($window.width() > breakpoint) {
          $detailMask.animate({
            height: $detailContent.height(),
            opacity: 1
          }, 300, 'easeInOutCubic');
        }
      });

      $el.on('mouseleave', () => {
        if ($window.width() > breakpoint) {
          $detailMask.animate({
            height: 0,
            opacity: 0
          }, 250, 'easeInOutCubic');
        }
      });
    });

    $ctaBtn.click((e) => {
      e.preventDefault();

      $isotope.arrange({ filter: '.is-hidden, .is-first' });

      $ctaBtn.hide();
    });
  };

  init();
};

export default Grid;
