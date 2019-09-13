import {createElement} from "../utils";

export class FilmCard {
  constructor({title, raiting, duration, year, genre, imageSrc, shortDesc, comments}) {
    this._title = title;
    this._raiting = raiting;
    this._duration = duration;
    this._year = year;
    this._genre = genre;
    this._imageSrc = imageSrc;
    this._shortDesc = shortDesc;
    this._comments = comments;
    this._element = null;
  }

  getTemplate() {
    return `<article class="film-card">
          <h3 class="film-card__title">${this._title}</h3>
          <p class="film-card__rating">${this._raiting}</p>
          <p class="film-card__info">
            <span class="film-card__year">${this._year}</span>
            <span class="film-card__duration">${this._duration}m</span>
            <span class="film-card__genre">${this._genre}</span>
          </p>
          <img src="./images/posters/${this._imageSrc}" alt="" class="film-card__poster">
          <p class="film-card__description">${this._shortDesc}…</p>
          <a class="film-card__comments">${this._comments} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    if (this._element) {
      this._element = null;
    }
  }
}
