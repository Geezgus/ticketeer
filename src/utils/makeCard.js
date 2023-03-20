export function makeCard({ title = 'Title', description = 'Lorem ipsum dolor sit amet' }) {
  const card = document.createElement('div')
  card.classList.add('card', 'h-100')

  card.appendChild(makeCardBody(title, description))

  return card
}

function makeCardBody(heading, paragraph) {
  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')

  const title = document.createElement('h2')
  title.innerText = heading

  const description = document.createElement('p')
  description.innerText = paragraph

  cardBody.appendChild(title)
  cardBody.appendChild(description)

  return cardBody
}
