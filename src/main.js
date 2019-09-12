import {Search} from './components/search';
import {User} from './components/user';
import {Info} from './components/info';
import {FilmCard} from './components/film-card';
import {FilmsContainer} from './components/films-container';
import {ShowMoreBtn} from './components/show-more-btn';
import {FilmsExtra} from './components/films-extra';
import {FilmsDetails} from "./components/film-details";
import {data, comment} from "./data.js";
import {Position, render} from "./utils";

const FILMS_COUNT = 5;
let Mocks = new Array(FILMS_COUNT)
  .fill(``)
  .map(data);

const EXTRA_FILMS_COUNT = 2;
let ExtraMocks = new Array(EXTRA_FILMS_COUNT)
  .fill(``)
  .map(data);

const FILM_DETAILS_COUNT = 1;
let DetailsMocks = new Array(FILM_DETAILS_COUNT)
  .fill(``)
  .map(data);

const bodyElement = document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const filmsContainer = new FilmsContainer();
render(siteMainElement, filmsContainer.getElement(), `beforeend`);

const siteFilmsElement = document.querySelector(`.films`);
const siteFilmsListElement = siteFilmsElement.querySelector(`.films-list`);
const siteFilmsElementContainer = siteFilmsListElement.querySelector(`.films-list__container`);

const user = new User();
render(siteHeaderElement, user.getElement(), Position.BEFOREEND);

const search = new Search();
render(siteHeaderElement, search.getElement(), Position.BEFOREEND);

const info = new Info();
render(siteMainElement, info.getElement(), Position.AFTERBEGIN);

const renderFilmCards = (mocks, place = siteFilmsElementContainer, position = Position.AFTERBEGIN) => {
  const renderFilmCard = new FilmCard(mocks);
  render(place, renderFilmCard.getElement(), position);
};

Mocks.forEach((Mocks) => renderFilmCards(Mocks));

const showMoreBtn = new ShowMoreBtn();
render(siteFilmsListElement, showMoreBtn.getElement(), Position.BEFOREEND);
const showMore = siteFilmsListElement.querySelector(`.films-list__show-more`);

const showMoreMocks = () => {
  Mocks.forEach((Mocks) => renderFilmCards(Mocks));
  showMore.removeEventListener(`click`, showMoreMocks);
  showMore.remove();
};

showMore.addEventListener(`click`, showMoreMocks);

const filmsExtraTopRated = new FilmsExtra(`Top rated`);
const filmsExtraMostCommented = new FilmsExtra(`Most commented`);
render(siteFilmsElement, filmsExtraTopRated.getElement(), Position.BEFOREEND);
render(siteFilmsElement, filmsExtraMostCommented.getElement(), Position.BEFOREEND);

const extraFilmsContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);

for (let key of extraFilmsContainer) {
  ExtraMocks.forEach((ExtraMocks) => renderFilmCards(ExtraMocks, key));
}

const filmDetails = new FilmsDetails(DetailsMocks, comment);
debugger
render(bodyElement, filmDetails.getElement(), Position.BEFOREEND);
