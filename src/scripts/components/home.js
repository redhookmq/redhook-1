import $ from 'jquery';
import Slider from './common/Slider';

const $window = $(window);

// init scroll down button
// ----------------------------------------- //
$('.scroll-down-btn').click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $window.height()
  }, 500, 'easeInOutQuad');
});

// init sliders
// ----------------------------------------- //
$('.slider').each((i, el) => {
  const thisSlider = new Slider(el);
});


