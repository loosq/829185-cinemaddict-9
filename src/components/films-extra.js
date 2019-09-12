import {createElement} from "../utils";

export class FilmsExtra {
  constructor(header) {
    this._header = header;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return `<section class="films-list--extra">
      <h2 class="films-list__title">${this._header}</h2>
      <div class="films-list__container"></div>
    </section>`;
  }
}
