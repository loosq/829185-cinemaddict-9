import {AbstractComponent} from "./AbstractComponent";

export class FilmsExtra extends AbstractComponent {
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
