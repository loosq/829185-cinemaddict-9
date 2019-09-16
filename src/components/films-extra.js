import {AbstractClass} from "../data";

export class FilmsExtra extends AbstractClass {
  constructor(header) {
    super();
    this._header = header;
  }

  getTemplate() {
    return `<section class="films-list--extra">
      <h2 class="films-list__title">${this._header}</h2>
      <div class="films-list__container"></div>
    </section>`;
  }
}
