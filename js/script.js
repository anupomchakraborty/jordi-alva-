$(function () {
  'use strict';

  // menu fix

  var navOff = $(".manu_part").offset().top;
  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navOff) {
      $(".manu_part").addClass("menu_fix");
    } else {
      $(".manu_part").removeClass("menu_fix");
    }
  });


  // about counter

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });




  $(document).ready(function () {
    $('.venobox').venobox();
  });



  $('.test_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });


  // bcktop



  $('.btt').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 2000);
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 300) {
      $('.btt').fadeIn();
    } else {
      $('.btt').fadeOut();
    }


  });


  // bcktop


});