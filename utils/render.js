// listType - ALL_FILMS | FAVORITE_FILMS
export const renderFilmsList = (list, listType) => {
  const container = document.querySelector(`.film-cards-container`)

  list.forEach((el) => {
    container.insertAdjacentHTML(
      `beforeend`,
      `
    <div class='film-card' id='${el.id}'>
      <img src='${el.imgUrl}' class='film-card__poster' />
      <h3 class='film-card__title'>${el.title}</h3>
      <button class='film-card_like-btn'>To favorite</button>
    </div>
    `
    )
  })
}
