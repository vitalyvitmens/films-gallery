import { ALL_FILMS, FAVORITE_FILMS } from './constants.js'
import { renderFilmsList } from './render.js'
import { fromStorage, toStorage } from './storage.js'

export const handleLikeBtn = (e, listType) => {
  const btn = e.target

  const id = btn.closest('div').getAttribute('id')

  const list = [...fromStorage(listType)]
  const indexOfList = list.findIndex((el) => el.id == id)
  list[indexOfList].isFavorite = !list.find((el) => el.id == id).isFavorite
  toStorage(listType, list)

  if (list[indexOfList].isFavorite) {
    btn.innerHTML = 'FAVORITE'
  } else {
    btn.innerHTML = 'to favorite'
  }

  toStorage(
    FAVORITE_FILMS,
    list.filter((el) => el.isFavorite)
  )

  renderFilmsList(list, listType)
}

export const handleFavoriteListBtn = (e) => {
  const btn = e.target
  const btnId = btn.getAttribute('id')
  let list

  if (btnId === ALL_FILMS) {
    btn.innerHTML = 'See all films'
    btn.id = FAVORITE_FILMS
    list = fromStorage(FAVORITE_FILMS)
  } else {
    btn.innerHTML = 'See favorite films'
    btn.id = ALL_FILMS
    list = fromStorage(ALL_FILMS)
  }

  renderFilmsList(list, btn.getAttribute('id'))
}
