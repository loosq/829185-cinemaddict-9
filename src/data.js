import { getRandomDescscription, getRandInt, getRandDate } from "./utils";

export const data = () => ({
  title: [
    `Made for each other`,
    `Popeye meets sinbad`,
    `Sagebrush trail`,
    `Santa claus conquers the martians`,
    `The dance of life`,
    `The great flamarion`,
    `The man with the golden arm`][getRandInt(0, 6)],
  imageSrc: [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`][getRandInt(0, 6)],
  genre: [
    `Western`,
    `Soap`,
    `Block-buster`,
    `Dramma`,
    `Si-Fi`,
    `Commedy`,
    `Thriller`][getRandInt(0, 6)],
  country: [
    `USA`,
    `USSR`,
    `Canada`,
    `UK`,
    `Denmark`,
    `UAR`,
    `Israel`][getRandInt(0, 6)],
  names: [
    ` Anne Wigton`,
    ` Heinz Herald`,
    ` Erich von Stroheim`,
    ` Mary Beth Hughes`,
    ` Dan Duryea`,
    ` Anthony Mann`,
  ],
  raiting: getRandInt(0, 9) + `.` + getRandInt(0, 9),
  comments: getRandInt(0, 100),
  shortDesc: getRandomDescscription(3),
  longDesc: getRandomDescscription(12),
  year: getRandInt(0, 2019),
  duration: getRandInt(0, 130),
  dateOforigin: getRandDate(),
  emojisSrc: [
    `smile.png`,
    `sleeping.png`,
    `puke.png`,
    `angry.png`,
  ][getRandInt(0, 3)],
});

export const comment = () => ({
  name: [
    `John Doe`,
    `Tim Macoveev`,
  ][getRandInt(0, 1)],
  text: getRandomDescscription(3),
  date: getRandDate(),
});
