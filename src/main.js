import {createSearchTemplate} from './components/search';
import {createUserTemplate} from './components/user';
import {createInfoTemplate} from './components/info';
import {createFilmCardTemplate} from './components/film-card';
import {createFilmsContainer} from './components/films-container';
import {createShowMoreBtn} from './components/show-more-btn';
import {createFilmsExtraTemplate} from './components/films-extra';
import {createFilmDetailsTemplate} from './components/film-details';
import {data, comments} from "./data.js";
import {getRandInt} from "./utils";

const filmCards = data.slice(0, 5);
const filmCardsMore = data.slice(0, 5);
const filmCardsExtra = data.slice(0, 2);
const filCardDetails = data[0];
const commentsBlock = comments.slice(0, getRandInt(0, comments.length - 1));

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, createFilmsContainer(), `beforeend`);

const siteFilmsElement = document.querySelector(`.films`);
const siteFilmsListElement = siteFilmsElement.querySelector(`.films-list`);
const siteFilmsElementContainer = siteFilmsListElement.querySelector(`.films-list__container`);

render(siteHeaderElement, createUserTemplate(), `beforeend`);
render(siteHeaderElement, createSearchTemplate(), `beforeend`);
render(siteMainElement, createInfoTemplate(), `afterbegin`);

filmCards.map((i) => render(siteFilmsElementContainer, createFilmCardTemplate(i), `afterbegin`));

render(siteFilmsListElement, createShowMoreBtn(), `beforeend`);

render(siteFilmsElement, createFilmsExtraTemplate(`Top rated`), `beforeend`);
render(siteFilmsElement, createFilmsExtraTemplate(`Most commented`), `beforeend`);

const siteFilmsExtraElements = document.querySelectorAll(`.films-list--extra .films-list__container`);
for (let z = 0; z <= siteFilmsExtraElements.length - 1; z++) {
  filmCardsExtra.map((i) => render(siteFilmsExtraElements[z], createFilmCardTemplate(i), `afterbegin`));
}
const footer = document.querySelector(`.footer`);

render(footer, createFilmDetailsTemplate(filCardDetails, commentsBlock), `afterend`);

const showMoreBtn = document.querySelector(`.films-list__show-more`);
const showMore = () => {
  filmCardsMore.map((i) => render(siteFilmsElementContainer, createFilmCardTemplate(i), `afterbegin`));
  showMoreBtn.removeEventListener(`click`, showMore);
  showMoreBtn.remove();
};
showMoreBtn.addEventListener(`click`, showMore);

const closeDetailsBtn = document.querySelector(`.film-details__close-btn`);
const removeFilmDetails = () => {
  const filmDetails = document.querySelector(`.film-details`);
  filmDetails.remove();
  closeDetailsBtn.removeEventListener(`click`, removeFilmDetails);
};
closeDetailsBtn.addEventListener(`click`, removeFilmDetails);
