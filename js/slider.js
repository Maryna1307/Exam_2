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
    dots: true,
    

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // },
    ],

   
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   },
    // ]
  });
});
