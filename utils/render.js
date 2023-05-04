import { handleLikeBtn } from './favorite.js'
import { sortAllFilmsByFavorite } from './sort.js'

// listType - ALL_FILMS | FAVORITE_FILMS
export const renderFilmsList = (list, listType) => {
  const body = document.getElementsByTagName('body')
  const oldContainer = document.getElementsByClassName('film-cards-container')
  oldContainer[0].remove()
  
  const container = document.createElement('div')
  container.className = 'film-cards-container'

  body[0].appendChild(container)

  const newList = sortAllFilmsByFavorite(list)
  newList.forEach((el) => {
    container.insertAdjacentHTML(
      'beforeend',
      `
    <div class='film-card' id='${el.id}'>
      <img src='${el.imgUrl}' class='film-card__poster' />
      <h3 id='clickableTitle_${el.id}' class='film-card__title'>${el.title}</h3>
      <button id='like_${el.id}' class='film-card_like-btn'>${
        el.isFavorite ? 'FAVORITE' : 'To favorite'
      }</button>
    </div>
    `
    )

    const likeBtn = document.getElementById(`like_${el.id}`)

    likeBtn.addEventListener('click', (e) =>
      handleLikeBtn(e, listType, container)
    )

    const clickableTitle = document.getElementById(`clickableTitle_${el.id}`)
    clickableTitle.addEventListener('click', () => {
      renderModal(el, listType, container)
    })
  })
}

export const renderModal = (film, listType, container) => {
  const body = document.getElementsByTagName('body')
  body[0].insertAdjacentHTML(
    'beforeend',
    `
  <div class="modal">
    <div class="modal_content">
      <div class="modal_content__close">&#10005;</div>
      <div class='film-card' id='${film.id}'>
        <img src='${film.imgUrl}' class='film-card__poster' />
        <h3 class='film-card__title'>${film.title}</h3>
        <p>${film.description}</p>
        <button id='modal_like_${film.id}' class='film-card_like-btn'>${
      film.isFavorite ? 'FAVORITE' : 'To favorite'
    }</button>
    </div>
    </div>
  </div>
  `
  )
  const likeBtn = document.getElementById(`modal_like_${film.id}`)
  likeBtn.addEventListener('click', (e) =>
    handleLikeBtn(e, listType, container)
  )

  const closeBtn = document.querySelector('.modal_content__close')
  closeBtn.addEventListener(
    'click',
    (e) => {
      const modal = document.querySelector('.modal')

      modal.remove()
    },
    {
      once: true,
    }
  )
}
