import { makeCard } from './utils/makeCard.js'
import { makeSlide } from './utils/makeSlide.js'
import { swiperConfig } from './swiper/swiperConfig.js'
import { minorSwiperConfig } from './swiper/minorSwiperConfig.js'

const SLIDES_COUNT = 10

const slides = () =>
  Array.apply(null, Array(SLIDES_COUNT)).map(() =>
    makeSlide({
      content: makeCard({
        title: 'FE5T4NÇ4 - DJ BRENØ SANTOS',
        description: 'A atração conta com lorem ipsum dolor sit amet. É imperdível!',
      }),
    })
  )

// Append slides to all Swipers
document.querySelectorAll('[class$=swiper]').forEach((swiper) => {
  swiper.append(...slides())
})

// Initialize Highlights Swiper
new Swiper('#highlights-swiper', swiperConfig)

// Initialize all Minor Swipers
document.querySelectorAll('.minor-swiper').forEach((x) => {
  new Swiper(`#${x.id}`, minorSwiperConfig)
})

// Adjust font size in Minor Swipers
document.querySelectorAll('.minor-swiper h2, .minor-swiper p').forEach((x) => {
  x.classList.add('fs-6')
})

// Add image to Cards
const DJ_IMAGE =
  'https://images.unsplash.com/photo-1528991281749-0092cfc77c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
document.querySelectorAll('.card-body').forEach((x) => {
  x.style.backgroundImage = `url(${DJ_IMAGE})`
})
