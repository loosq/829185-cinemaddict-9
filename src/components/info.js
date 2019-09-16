import {getRandInt} from "../utils";
import {AbstractComponent} from "./AbstractComponent";

export class Info extends AbstractComponent {

  getTemplate() {
    return `<nav class="main-navigation">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getRandInt(0, 20)}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getRandInt(0, 100)}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getRandInt(0, 10)}</span></a>
    <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
  </nav>
  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
  }
}
