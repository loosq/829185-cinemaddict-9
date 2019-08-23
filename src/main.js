import {createSearchTemplate} from './components/search';
import {createUserTemplate} from './components/user';
import {createInfoTemplate} from './components/info';
import {createFilmCardTemplate} from './components/film-card';
import {createFilmsContainer} from './components/films-container';
import {createShowMoreBtn} from './components/show-more-btn';
import {createFilmsExtraTemplate} from './components/films-extra';
//import {createFilmDetailsTemplate} from './components/film-details';
import {getSomeCards} from "./data-controller";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

//const siteFooter = document.querySelector(`Footer`);
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, createFilmsContainer(), `beforeend`);

const siteFilmsElement = document.querySelector(`.films`);
const siteFilmsListElement = siteFilmsElement.querySelector(`.films-list`);
const siteFilmsElementContainer = siteFilmsListElement.querySelector(`.films-list__container`);

render(siteHeaderElement, createUserTemplate(), `beforeend`);
render(siteHeaderElement, createSearchTemplate(), `beforeend`);
render(siteMainElement, createInfoTemplate(), `afterbegin`);

// const renderSomeCards = (count, place) => new Array(count).fill(``).forEach(() => render(place, createFilmCardTemplate(CARDS_TOTAL), `afterbegin`));
// renderSomeCards(5, siteFilmsElementContainer);
getSomeCards(5).map((i) => render(siteFilmsElementContainer, createFilmCardTemplate(i), `afterbegin`));

render(siteFilmsListElement, createShowMoreBtn(), `beforeend`);

render(siteFilmsElement, createFilmsExtraTemplate(`Top rated`), `beforeend`);
render(siteFilmsElement, createFilmsExtraTemplate(`Most commented`), `beforeend`);

const siteFilmsExtraElements = document.querySelectorAll(`.films-list--extra .films-list__container`);
console.log(getSomeCards(2));
for (let z = 0; z <= siteFilmsExtraElements.length - 1; z++) {
  render(siteFilmsExtraElements[z], getSomeCards(siteFilmsExtraElements.length), `afterbegin`);
}

// render(siteFooter, createFilmDetailsTemplate(getSomeCards(CARDS)), `afterend`);

// const loadMoreBtn = siteFilmsListElement.querySelector(`.films-list__show-more`);
// loadMoreBtn.addEventListener(`click`, function () {
//   CARDS_TOTAL.map((i) => render(siteFilmsElementContainer, createFilmCardTemplate(i), `afterbegin`));
// });

// const closeBtn = document.querySelector(`.film-details__close-btn`);
// closeBtn.addEventListener(`click`, function () {
//   render(siteFilmsExtraElements, getSomeCards(5), `afterbegin`);
// });
