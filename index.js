import { filmsMock } from './filmsMock.js'
import { ALL_FILMS, FAVORITE_FILMS } from './utils/constants.js'
import { handleFavoriteListBtn } from './utils/favorite.js'
import { renderFilmsList } from './utils/render.js'
import { fromStorage, toStorage } from './utils/storage.js'

if (!fromStorage(ALL_FILMS)) {
  toStorage(ALL_FILMS, filmsMock)
}

const allFilms = fromStorage(ALL_FILMS)
// const favoriteFilms = fromStorage(FAVORITE_FILMS)

const favoriteBtn = document.querySelector('.films-favorite-btn')
favoriteBtn.addEventListener('click', handleFavoriteListBtn)

renderFilmsList(allFilms, ALL_FILMS)
