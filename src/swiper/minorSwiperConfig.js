export const minorSwiperConfig = {
  createElements: true,
  slideToClickedSlide: true,
  spaceBetween: 8,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    576: {
      slidesPerView: 2,
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    768: {
      slidesPerView: 3,
      pagination: {
        dynamicMainBullets: 3,
      },
    },
    992: {
      slidesPerView: 4,
      pagination: {
        dynamicMainBullets: 5,
      },
    },
    1200: {
      slidesPerView: 4,
      pagination: {
        dynamicMainBullets: 5,
      },
    },
    1400: {
      slidesPerView: 5,
      pagination: {
        dynamicMainBullets: 6,
      },
    },
    2560: {
      slidesPerView: 5,
      pagination: {
        dynamicMainBullets: 6,
      },
    },
  },
}
