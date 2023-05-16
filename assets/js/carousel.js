"use strict";

// Services Slides

$(".services__content").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  speed: 900,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: ".next__btn",
  prevArrow: ".previous__btn",
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        Arrows: false,
        dots: true,
      },
    },
  ],
});

// Customers slide

$(".customers__slide").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  nextArrow: ".next",
  prevArrow: ".previous",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
