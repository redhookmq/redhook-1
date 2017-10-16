import $ from 'jquery';

const $body = $('body');
const $mask = $('.site-container__mask');
const $menuBtn = $('.menu-btn');

// bind
// ----------------------------------------- //
$menuBtn.click((e) => {
  e.preventDefault();
  openNav();
});

$mask.click((e) => {
  e.preventDefault();
  closeNav();
});

// methods
// ----------------------------------------- //
const openNav = function () {
  $body.addClass('has-open-nav');
};

const closeNav = function () {
  $body.removeClass('has-open-nav');
};
