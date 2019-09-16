import {Position, render} from "../utils";
import {FilmCard} from "../components/film-card";
import {FilmsDetailsContainer} from "../components/film-details-container";
import {FilmsDetails} from "../components/film-details";
import {CommentsContainer} from "../components/comments-container";
import {Comment} from "../components/comment";
import {FilmsContainer} from "../components/films-container";

export class PageController {
  constructor(container, filmMocks, commentMocks) {
    this._container = container;
    this._someMocks = filmMocks;
    this._commentMocks = commentMocks;
    this._filmsContainer = new FilmsContainer();
  }

  init() {
    render(this._container, this._filmsContainer.getElement(), Position.BEFOREEND);

    this._someMocks.forEach((mocks, commentMocks) => this._renderFilmCards(mocks, commentMocks));
  }

  _renderFilmCards(mocks, commentMocks) {
    const filmCardComponent = new FilmCard(mocks);
    const filmDetailsContainerComponent = new FilmsDetailsContainer();
    const filmDetailsComponent = new FilmsDetails(mocks);
    const commentsContainerComponent = new CommentsContainer(this._commentMocks.length);
    const commentBlock = new Comment(commentMocks);

    filmCardComponent.getElement()
      .querySelector(`.film-card__poster`)
      .addEventListener(`click`, function () {
        const bodyElement = document.querySelector(`body`);
        render(bodyElement, filmDetailsContainerComponent.getElement(), Position.BEFOREEND);
        const filmDetailsWrapper = bodyElement.querySelector(`.film-details`);
        const filmDetailsInnerElement = bodyElement.querySelector(`.film-details__inner`);
        render(filmDetailsInnerElement, filmDetailsComponent.getElement(), Position.AFTERBEGIN);
        render(filmDetailsInnerElement, commentsContainerComponent.getElement(), Position.BEFOREEND);
        render(commentsContainerComponent.getElement()
            .querySelector(`.film-details__comments-list`), commentBlock.getElement(), Position.BEFOREEND);


        const onEscKeyDown = (evt) => {
          if (evt.key === `Escape` || evt.key === `Esc`) {
            filmDetailsWrapper.remove();
            filmDetailsContainerComponent.removeElement();
            filmDetailsComponent.removeElement();
            commentsContainerComponent.removeElement();
            document.removeEventListener(`keydown`, onEscKeyDown);
          }
        };
        document.addEventListener(`keydown`, onEscKeyDown);

        filmDetailsComponent.getElement()
          .querySelector(`.film-details__close-btn`)
          .addEventListener(`click`, function () {
            filmDetailsWrapper.remove();
            filmDetailsContainerComponent.removeElement();
            filmDetailsComponent.removeElement();
            commentsContainerComponent.removeElement();
          });

        commentsContainerComponent.getElement()
          .querySelector(`textarea`)
          .addEventListener(`focus`, function () {
            document.removeEventListener(`keydown`, onEscKeyDown);
          });
        commentsContainerComponent.getElement()
          .querySelector(`textarea`)
          .addEventListener(`blur`, function () {
            document.addEventListener(`keydown`, onEscKeyDown);
          });
      });

    render(this._filmsContainer.getElement(), filmCardComponent.getElement(), Position.BEFOREEND);
  }
}
