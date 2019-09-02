import {getRandDesc, getRandInt, getRandDate, getRandArrElems} from "./utils";

const filmCard = {
  titles: [
    `Made for each other`,
    `Popeye meets sinbad`,
    `Sagebrush trail`,
    `Santa claus conquers the martians`,
    `The dance of life`,
    `The great flamarion`,
    `The man with the golden arm`],
  imgs: [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`],
  genres: [
    `Western`,
    `Soap`,
    `Block-buster`,
    `Dramma`,
    `Si-Fi`,
    `Commedy`,
    `Thriller`],
  countries: [
    `USA`,
    `USSR`,
    `Canada`,
    `UK`,
    `Denmark`,
    `UAR`,
    `Israel`],
  names: [
    ` Anne Wigton`,
    ` Heinz Herald`,
    ` Erich von Stroheim`,
    ` Mary Beth Hughes`,
    ` Dan Duryea`,
    ` Anthony Mann`,
  ],
  get director() {
    return getRandArrElems(1, this.names);
  },
  get writer() {
    return getRandArrElems(1, this.names);
  },
  get actors() {
    return getRandArrElems(3, this.names);
  },
  get country() {
    return this.countries[getRandInt(0, this.countries.length - 1)];
  },
  get title() {
    return this.titles[getRandInt(0, this.titles.length - 1)];
  },
  get imageSrc() {
    return this.imgs[getRandInt(0, this.imgs.length - 1)];
  },
  get genre() {
    return this.genres[getRandInt(0, this.genres.length - 1)];
  },
  get raiting() {
    return getRandInt(0, 9) + `.` + getRandInt(0, 9);
  },
  get comments() {
    return getRandInt(0, 100);
  },
  get shortDesc() {
    return getRandDesc(3);
  },
  get longDesc() {
    return getRandDesc(12);
  },
  get year() {
    return getRandInt(0, 2019);
  },
  get duration() {
    return getRandInt(0, 130);
  },
  get dateOforigin() {
    return getRandDate();
  },
};

export const data = [filmCard, filmCard, filmCard, filmCard, filmCard, filmCard, filmCard, filmCard, filmCard, filmCard];

const comment = {
  names: [
    `John Doe`,
    `Tim Macoveev`,
  ],
  emojisSrcs: [
    `smile.png`,
    `sleeping.png`,
    `puke.png`,
    `angry.png`,
  ],
  get emojiSrc() {
    return this.emojisSrcs[getRandInt(0, this.emojisSrcs.length - 1)];
  },
  get text() {
    return getRandDesc(3);
  },
  get date() {
    return getRandDate();
  },
  get name() {
    return this.names[getRandInt(0, this.names.length - 1)];
  },
};

export const comments = [comment, comment, comment, comment, comment];
