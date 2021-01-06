import $ from 'jquery';
import Slider from './common/Slider';
import Grid from './common/Grid';

const $window = $(window);
const $windowWidth = $(window).width();
const $hero = $('#hero');
var $scrollDistance = 170;


if ( $windowWidth <= 870 ) {
  $scrollDistance = 80;
}

// init scroll down button
// ----------------------------------------- //
$('.scroll-down-btn').click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $hero.height() - $scrollDistance
  }, 500, 'easeInOutQuad');
});

// init sliders
// ----------------------------------------- //
$('.slider').each((i, el) => {
  const thisSlider = new Slider(el);
});

// init grids
// ----------------------------------------- //
$('.grid').each((i, el) => {
  const thisGrid = new Grid(el);
});

// leadership
// ----------------------------------------- //
const $body = $('html, body');
const $leadershipSection = $('.leadership');
const $leaderLinks = $('.leader__link');
const $biosSection = $('.bios');
const $faqSection = $('.faq');
const $faqsSection = $('.faqs');
const $navLinks = $('.bios__nav-link');
const $bios = $('.bio');


$leaderLinks.each((i, el) => {
  const $el = $(el);

  $el.click((e) => {
    e.preventDefault();
    if ( $el.data('href') !== undefined ) {
    	openBio($el.data('href').replace('#', ''));
    } else {
    	openBio($el.attr('href').replace('#', ''));
    }
  });
});

$navLinks.each((i, el) => {
  const $el = $(el);

  $el.click((e) => {
    e.preventDefault();
    openBio($el.attr('href').replace('#', ''));
  });
});

$('.bios__close-btn').click((e) => {
  e.preventDefault();
  closeBio();
});

$('.faq .faq-all').click((e) => {
  e.preventDefault();
  openFaq();
});

$('.faqs .faq-close').click((e) => {
  e.preventDefault();
  closeFaq();
});

const openBio = function (id) {
  $leadershipSection.addClass('is-open');
  $biosSection.addClass('is-open');

  const offset = $biosSection.offset().top - $scrollDistance;

  $body.animate({
    scrollTop: offset
  }, 500, 'easeInOutQuad');

  $bios.each((i, el) => {
    const $el = $(el);
    if ($el.attr('id') === id) {
      $el.addClass('is-current');
    } else {
      $el.removeClass('is-current');
    }
  });

  $navLinks.each((i, el) => {
    const $el = $(el);
    if ($el.attr('href').replace('#', '') === id) {
      $el.addClass('is-current');
    } else {
      $el.removeClass('is-current');
    }
  });
};

const closeBio = function () {
  $leadershipSection.removeClass('is-open');
  $biosSection.removeClass('is-open');
};




const openFaq = function (id) {
  $faqSection.addClass('is-open');
  $faqsSection.addClass('is-open');

  const offset = $faqsSection.offset().top - $scrollDistance;

  $body.animate({
    scrollTop: offset
  }, 500, 'easeInOutQuad');

  $navLinks.each((i, el) => {
    const $el = $(el);
    if ($el.attr('href').replace('#', '') === id) {
      $el.addClass('is-current');
    } else {
      $el.removeClass('is-current');
    }
  });
};

const closeFaq = function () {
  $faqSection.removeClass('is-open');
  $faqsSection.removeClass('is-open');
};

// Accordion
//
const $accordion = $('.accordion-header');
const $accordionDesc = $('.accordion-desc');
const $icon = $('.accordion-header .indicator');

$accordionDesc.fadeOut(0);

 $('.accordion-header').click(function() {

   if ( $(this).hasClass('open' ) ) {
     $(this).removeClass('open');
   }

   if( $(this).find('.indicator').hasClass('open') ) {

      $(this).find('.indicator').removeClass('open');

    } else {

      $(this).find('.indicator').addClass('open');

    }

    $accordionDesc.not($(this).next()).slideUp('fast');
    $(this).next().slideToggle(400);

 });


$(".services__video").on("click", function (ev) {
  
  $(this).addClass("active");

  var $video = $(this)
  .children(".services__video-container")
  .children(".services__responsive-video");

  $video.addClass("active");
  $(".services__video-keyframe-image").addClass('active');
  $(".services__video-play-btn").addClass('active');
  $(".video-placeholder").addClass('active');

  $video.html($($video.data("video")));

});

$(".bio__details.closed .preview").each( function() {
	if ( ! $(this).children('p').length ) {
		var cont = $(this);
		var content = cont.html();
		content = '<p>' + content + '</p>';
		cont.html(content);

		var complete = $(this).siblings('.bio-complete');
		var complete_bio = complete.html();
		complete_bio = '<p>' + complete_bio + '</p>';

		complete.html(complete_bio);

	}
});


$(".bio__details.closed .preview p").append("<span class='read-more'> " + $('.bio__details.closed').data("read-more") + "</span>");
const $readmorelink = $('.bio__details .read-more');

$readmorelink.on('click', function(e){
  console.log('click event');
  var $parent = $(this).parents('.bio__details');
  $parent.toggleClass('closed').toggleClass('open');
});





