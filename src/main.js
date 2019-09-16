import {Search} from './components/search';
import {User} from './components/user';
import {Info} from './components/info';
import {FilmCard} from './components/film-card';
import {FilmsContainer} from './components/films-container';
import {ShowMoreBtn} from './components/show-more-btn';
import {FilmsExtra} from './components/films-extra';
import {FilmsDetailsContainer} from "./components/film-details-container";
import {FilmsDetails} from "./components/film-details";
import {CommentsContainer} from './components/comments-container';
import {Comment} from './components/comment';
import {data, comment} from "./data.js";
import {Position, render} from "./utils";
import {PageController} from "./controllers/PageController";

const COMMENTS_COUNT = 3;
let CommentMocks = new Array(COMMENTS_COUNT)
  .fill(``)
  .map(comment);

const FILMS_COUNT = 5;
let Mocks = new Array(FILMS_COUNT)
  .fill(``)
  .map(data);

const EXTRA_FILMS_COUNT = 2;
let ExtraMocks = new Array(EXTRA_FILMS_COUNT)
  .fill(``)
  .map(data);

const bodyElement = document.querySelector(`body`);
const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

// const filmsContainer = new FilmsContainer();
// render(siteMainElement, filmsContainer.getElement(), `beforeend`);

// const siteFilmsElement = document.querySelector(`.films`);
// const siteFilmsListElement = siteFilmsElement.querySelector(`.films-list`);
// const siteFilmsElementContainer = siteFilmsListElement.querySelector(`.films-list__container`);

const user = new User();
render(siteHeaderElement, user.getElement(), Position.BEFOREEND);

const search = new Search();
render(siteHeaderElement, search.getElement(), Position.BEFOREEND);

const info = new Info();
render(siteMainElement, info.getElement(), Position.AFTERBEGIN);

const pageControlle = new PageController(siteMainElement, Mocks, CommentMocks);
pageControlle.init();
//
// const renderComment = (commentMock) => {
//   const commentBlock = new Comment(commentMock);
//   const commentsList = document.querySelector(`.film-details__comments-list`);
//   render(commentsList, commentBlock.getElement(), Position.AFTERBEGIN);
// };
//
// const renderFilmCards = (mocks, place = siteFilmsElementContainer, position = Position.AFTERBEGIN) => {
//   const renderFilmCard = new FilmCard(mocks);
//   const filmDetailsContainer = new FilmsDetailsContainer(CommentMocks);
//   const filmDetails = new FilmsDetails(mocks);
//   const commentsContainer = new CommentsContainer(COMMENTS_COUNT);
//
//
//   renderFilmCard.getElement()
//     .querySelector(`.film-card__poster`)
//     .addEventListener(`click`, function () {
//       render(bodyElement, filmDetailsContainer.getElement(), Position.BEFOREEND);
//       const filmDetailsWrapper = bodyElement.querySelector(`.film-details`);
//       const filmDetailsInnerElement = bodyElement.querySelector(`.film-details__inner`);
//       render(filmDetailsInnerElement, filmDetails.getElement(), Position.AFTERBEGIN);
//       render(filmDetailsInnerElement, commentsContainer.getElement(), Position.BEFOREEND);
//       CommentMocks.forEach((CommentMocks) => renderComment(CommentMocks));
//
//       const onEscKeyDown = (evt) => {
//         if (evt.key === `Escape` || evt.key === `Esc`) {
//           filmDetailsWrapper.remove();
//           filmDetailsContainer.removeElement();
//           filmDetails.removeElement();
//           commentsContainer.removeElement();
//           document.removeEventListener(`keydown`, onEscKeyDown);
//         }
//       };
//       document.addEventListener(`keydown`, onEscKeyDown);
//
//       filmDetails.getElement()
//         .querySelector(`.film-details__close-btn`)
//         .addEventListener(`click`, function () {
//           filmDetailsWrapper.remove();
//           filmDetailsContainer.removeElement();
//           filmDetails.removeElement();
//           commentsContainer.removeElement();
//         });
//
//       commentsContainer.getElement()
//         .querySelector(`textarea`)
//         .addEventListener(`focus`, function () {
//           document.removeEventListener(`keydown`, onEscKeyDown);
//         });
//       commentsContainer.getElement()
//         .querySelector(`textarea`)
//         .addEventListener(`blur`, function () {
//           document.addEventListener(`keydown`, onEscKeyDown);
//         });
//     });
//
//   render(place, renderFilmCard.getElement(), position);
// };
//
// Mocks.forEach((Mocks) => renderFilmCards(Mocks));

// const showMoreBtn = new ShowMoreBtn();
// render(siteFilmsListElement, showMoreBtn.getElement(), Position.BEFOREEND);
// const showMore = siteFilmsListElement.querySelector(`.films-list__show-more`);
// const showMoreMocks = () => {
//   Mocks.forEach((Mocks) => renderFilmCards(Mocks));
//   showMore.removeEventListener(`click`, showMoreMocks);
//   showMore.remove();
// };
// showMore.addEventListener(`click`, showMoreMocks);
// const filmsExtraTopRated = new FilmsExtra(`Top rated`);
// const filmsExtraMostCommented = new FilmsExtra(`Most commented`);
// render(siteFilmsElement, filmsExtraTopRated.getElement(), Position.BEFOREEND);
// render(siteFilmsElement, filmsExtraMostCommented.getElement(), Position.BEFOREEND);
// const extraFilmsContainer = document.querySelectorAll(`.films-list--extra .films-list__container`);
// for (let key of extraFilmsContainer) {
//   ExtraMocks.forEach((ExtraMocks) => renderFilmCards(ExtraMocks, key));
// }
