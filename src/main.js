import {createSearchTemplate} from './components/search';
import {createUserTemplate} from './components/user';
import {createInfoTemplate} from './components/info';
import {createFilmCardTemplate} from './components/film-card';
import {createFilmsContainer} from './components/films-container';
import {createShowMoreBtn} from './components/show-more-btn';
import {createFilmsExtraTemplate} from './components/films-extra';
import {createFilmDetailsTemplate} from './components/film-details';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteFooter = document.querySelector(`Footer`);
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteMainElement, createFilmsContainer(), `beforeend`);

const siteFilmsElement = document.querySelector(`.films`);
const siteFilmsListElement = siteFilmsElement.querySelector(`.films-list`);
const siteFilmsElementContainer = siteFilmsListElement.querySelector(`.films-list__container`);

render(siteHeaderElement, createUserTemplate(), `beforeend`);
render(siteHeaderElement, createSearchTemplate(), `beforeend`);
render(siteMainElement, createInfoTemplate(), `afterbegin`);

new Array(5).fill(``).forEach(() => render(siteFilmsElementContainer, createFilmCardTemplate(), `afterbegin`));

render(siteFilmsListElement, createShowMoreBtn(), `beforeend`);

render(siteFilmsElement, createFilmsExtraTemplate(`Top rated`), `beforeend`);
render(siteFilmsElement, createFilmsExtraTemplate(`Most commented`), `beforeend`);

const siteFilmsExtraElements = document.querySelectorAll(`.films-list--extra .films-list__container`);

siteFilmsExtraElements.forEach((siteFilmsExElementContainer) => new Array(2).fill(``).forEach(() => render(siteFilmsExElementContainer, createFilmCardTemplate(), `afterbegin`)));

render(siteFooter, createFilmDetailsTemplate(), `afterend`);
