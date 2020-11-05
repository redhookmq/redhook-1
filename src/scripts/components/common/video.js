import $ from 'jquery';

$(".services__video").on("click", function (ev) {

  console.log('testing...');
  
  $(this).addClass("active");

  var $video = $(this)
  .children(".services__video-container")
  .children(".services__responsive-video");
    // .parent("div")
    // .siblings(".video-container")
    //.children(".responsive-video");

  $video.addClass("active");

  $(".video-placeholder").addClass('active');

  $video.html($($video.data("video")));

});