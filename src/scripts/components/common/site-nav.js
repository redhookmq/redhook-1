import $ from 'jquery';
import debounce from 'lodash/debounce';
import { NAV_BREAKPOINT, NAV_HEIGHT } from '../../constants/Constants';

const $window = $(window);
const $body = $('html, body');
const $mask = $('.site-container__mask');
const $siteNav = $('.site-nav');
const $menuBtn = $('.menu-btn');
const $links = $('.site-nav__link');
const $siteSections = $('.js-site-section');
let windowHeight = $window.height();
let isSticky = false;

// init
// ----------------------------------------- //
const init = function () {
  checkScrollPosition();
  bind();
};

// bind
// ----------------------------------------- //
const bind = function () {
  $menuBtn.click((e) => {
    e.preventDefault();
    openNav();
  });

  $mask.click((e) => {
    e.preventDefault();
    closeNav();
  });

  $links.each((i, el) => {
    const $el = $(el);
    const id = $el.attr('href');

    $el.click((e) => {
      e.preventDefault();
      scrollToSection(id);
    });
  });

  $window.on('scroll', () => {
    checkScrollPosition();
  });

  $window.on('resize', debounce(() => {
    windowHeight = $window.height();
  }, 300));
};

// methods
// ----------------------------------------- //
const openNav = function () {
  $body.addClass('has-open-nav');
};

const closeNav = function () {
  $body.removeClass('has-open-nav');
};

const checkScrollPosition = function () {
  if ($window.scrollTop() > windowHeight - 84) {
    if (isSticky === false) {
      isSticky = true;
      $siteNav.addClass('is-sticky');
    }
  } else if (isSticky) {
    isSticky = false;
    $siteNav.removeClass('is-sticky');
  }
};

const scrollToSection = function (id) {
  let offset = $(id).offset().top;

  closeNav();

  if ($window.width() >= NAV_BREAKPOINT) {
    offset -= NAV_HEIGHT;
  }

  $body.animate({
    scrollTop: offset
  }, 500, 'easeInOutQuad');
};

init();
