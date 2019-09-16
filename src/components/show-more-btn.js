import {AbstractComponent} from "./AbstractComponent";

export class ShowMoreBtn extends AbstractComponent {

  getTemplate() {
    return `<button class="films-list__show-more">Show more</button>`;
  }
}
