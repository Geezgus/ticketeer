export function makeCard({ title = 'Title', description = 'Lorem ipsum dolor sit amet' }) {
  const card = document.createElement('div')
  card.classList.add('card', 'h-100')

  card.appendChild(makeCardBody(title, description))

  return card
}

function makeCardBody(heading, paragraph) {
  const cardBody = document.createElement('a')
  cardBody.classList.add('card-body', 'd-block')
  cardBody.setAttribute('href', 'ticket.html')

  const title = document.createElement('h2')
  title.innerText = heading

  const description = document.createElement('p')
  description.innerText = paragraph
  description.className = ''

  cardBody.appendChild(title)
  cardBody.appendChild(description)

  return cardBody
}
