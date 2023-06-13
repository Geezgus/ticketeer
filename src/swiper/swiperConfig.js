export const swiperConfig = {
  centeredSlides: true,
  createElements: true,
  slideToClickedSlide: true,
  spaceBetween: 8,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      pagination: {
        dynamicMainBullets: 1,
      },
    },
    576: {
      slidesPerView: 1,
      pagination: {
        dynamicMainBullets: 2,
      },
    },
    768: {
      slidesPerView: 2,
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    992: {
      slidesPerView: 2,
      pagination: {
        dynamicMainBullets: 4,
      },
    },
    1200: {
      slidesPerView: 2,
      pagination: {
        dynamicMainBullets: 5,
      },
    },
    1400: {
      slidesPerView: 2,
      pagination: {
        dynamicMainBullets: 6,
      },
    },
    2560: {
      slidesPerView: 3,
      pagination: {
        dynamicMainBullets: 6,
      },
    },
  },
}
