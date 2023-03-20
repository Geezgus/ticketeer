export function makeSlide({ content }) {
  const slide = document.createElement('div')
  slide.classList.add('swiper-slide')

  if (content) {
    slide.appendChild(content)
  }

  return slide
}
