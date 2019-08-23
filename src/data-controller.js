import {getRandDesc, getRandInt, getRandDate, getRandArrElems } from "./utils";
import {data} from "./data";

/*
 * Возвращает массив с заданным числом карточек.
 *
 * @param {int} numberOfCards максимальное число
 */
export const getSomeCards = (numberOfCards) => {
  const arr = [];
  if (parseInt(numberOfCards, 10)) {
    while (numberOfCards > 0) {
      arr.push(data);
      numberOfCards--;
    }
  }

  return arr;
};
