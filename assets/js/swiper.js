const sponsors_swp = new Swiper(".sponsors-swp", {
  loop: true,
  slidesPerView: 4,
  speed: 2000,
  autoplay: {
    enabled: true,
    delay: 0,
    disableOnInteraction: false,
  },
  cssMode: false,
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
    575: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
    },
  },
});
