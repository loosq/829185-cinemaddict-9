/*
 * Возвращает случайное число в интервале между min и max.
 *
 * @param {int} min минимальное число
 * @param {int} max максимальное число
 */
export const getRandInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

/*
 * Возвращает строку с заданым количеством предложений.
 *
 * @param {int} count минимальное число предложений.
 */
export const getRandomDescscription = (count) => {
  const arr = [
    ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    ` Cras aliquet varius magna, non porta ligula feugiat eget.`,
    ` Fusce tristique felis at fermentum pharetra.`,
    ` Aliquam id orci ut lectus varius viverra.`,
    ` Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    ` Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    ` Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    ` Sed sed nisi sed augue convallis suscipit in sed felis.`,
    ` Aliquam erat volutpat.`,
    ` Nunc fermentum tortor ac porta dapibus.`,
    ` In rutrum ac purus sit amet tempus.`,
  ];
  const arrCollect = [];
  while (count > 0) {
    arrCollect.push(arr[getRandInt(0, arr.length)]);
    count -= 1;
  }

  return arrCollect.join(``);
};

/*
 * Возвращает случайное значение true/false.
 */
export const getRandBool = () => Boolean(Math.round(Math.random()));

/*
 * Возвращает случайную дату из прошлого.
 *
 */
export const getRandDate = () => Date.now() - getRandInt(0, Date.now());

/*
 * Возвращает определённое кол-во случайных элементов массива.
 *
 * @param {count} int количество элементов;
 * @param {arr} массив;
 */
export const getRandArrElems = (count, arr) => {
  const arrCollect = [];
  while (count > 0) {
    arrCollect.push(arr[getRandInt(0, arr.length - 1)]);
    count -= 1;
  }

  return arrCollect;
};

/* Вспомогательное перечисление
*/
export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

/* Создаёт разметку
*
* @param {string} template разметка
*/
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

/* Отрисовывает разметку в родительском элементе
*
* @param {string} container родительский элемент
* @param {string} element разметка
* @param {string} place место отрисовки, AFTERBEGIN - вначале, BEFOREEND - вконце.
*/
export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

/* Удаляет разметку
*
* @param {string} template разметка
*/
export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
