$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,

        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1500,
        slideToShow: 1,
        swipe: true,
    });
  });


$(document).ready(function(){
  $('.news__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });
});

// var $wrapper = $('<div class="wrapper"></div>');

// $('.item').on('click', function(event) {
  
//   var $clone = $(this).clone();
//   $clone.addClass('wrapper__img');
 
//   $wrapper.html($clone);
//   $wrapper.appendTo('body').fadeIn(400); 
  
// });

// $wrapper.on('click', function(event) {
//     $(this).empty();
//     $(this).fadeOut(400, function() {
//       $(this).detach();
//     });    
//  });