import $ from 'jquery';
import debounce from 'lodash/debounce';

const $window = $(window);
const $body = $('body');
const $mask = $('.site-container__mask');
const $siteNav = $('.site-nav');
const $menuBtn = $('.menu-btn');
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

init();
