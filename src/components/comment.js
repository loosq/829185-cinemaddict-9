import {createElement} from "../utils";
import moment from 'moment';

export class Comment {
  constructor({name, text, date, emojisSrc}) {
    this._name = name;
    this._text = text;
    this._date = date;
    this._emojiSrc = emojisSrc;
    this._element = null;
  }

  getTemplate() {
    return `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${this._emojiSrc}" width="55" height="55" alt="emoji">
            </span>
            <div>
              <p class="film-details__comment-text">${this._text}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${this._name}</span>
                <span class="film-details__comment-day">${moment(this._date).endOf(`day`).fromNow()}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`;
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
