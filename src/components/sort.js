import {AbstractComponent} from "./AbstractComponent";

export class Sort extends AbstractComponent {

  getTemplate() {
    return `<ul class="sort">
    <li><a href="#" data-sort-type="default" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" data-sort-type="date-up" class="sort__button">Sort by date</a></li>
    <li><a href="#" data-sort-type="raiting-up" class="sort__button">Sort by rating</a></li>
  </ul>`;
  }
}
