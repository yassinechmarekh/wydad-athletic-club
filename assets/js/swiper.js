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

const palmares_swp = new Swiper(".palmares-swp", {
  loop: true,
  slidesPerView: 4,
  spaceBeetween: 20,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    1800: {
      slidesPerView: 6,
    },
    1450: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
    675: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const products_swp = new Swiper(".products-swp", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const blogs_swp = new Swiper(".blogs-swp", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const players_swp = new Swiper(".players-swp", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});


const product_images_mobile_swp = new Swiper('.product-images-mobile-swp', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const associated_products_swp = new Swiper('.associated-products-swp', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  autoplau:{
    delay: 2500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});