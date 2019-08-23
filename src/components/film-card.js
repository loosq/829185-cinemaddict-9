export const createFilmCardTemplate = (filmCard) => {
  return `
  <article class="film-card">
          <h3 class="film-card__title">${filmCard.title}</h3>
          <p class="film-card__rating">${filmCard.raiting}</p>
          <p class="film-card__info">
            <span class="film-card__year">${filmCard.year}</span>
            <span class="film-card__duration">${filmCard.duration}m</span>
            <span class="film-card__genre">${filmCard.genre}</span>
          </p>
          <img src="./images/posters/${filmCard.imageSrc}" alt="" class="film-card__poster">
          <p class="film-card__description">${filmCard.shortDesc}…</p>
          <a class="film-card__comments">${filmCard.comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`;
};
