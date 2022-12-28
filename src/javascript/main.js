function mobileNav() {
    const burger = document.querySelector(".burger");
    const mobileNav = document.querySelector(".mobile-nav");
    burger.classList.toggle("open");
    mobileNav.classList.toggle("closed");
};

$(document).ready(function () {
    $(".caoursel-test").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });