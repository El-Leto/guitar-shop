import { GUITAR_ON_PAGE, MAX_PERCENT, Discount,  SortDirectionButton } from './const';

const getGuitarsOnPage = (guitars, page) => guitars.slice(page * GUITAR_ON_PAGE - GUITAR_ON_PAGE, page * GUITAR_ON_PAGE);

const filterByType = (item, types) => {
  if (!types.length) {
    return item;
  }

  return types.some((type) => type.toLowerCase() === item.type.toLowerCase());
};

const filterByStrings = (item, strings) => {
  if (!strings.length) {
    return item;
  }

  return strings.some((string) => Number(string) === item.strings);
};

const SortingTypes = (sortType, sortDirection) => {
  if (sortDirection === SortDirectionButton.FROM_MORE_TO_LESS) {
    return (a, b) => b[sortType] - a[sortType];
  }
  return (a, b) => a[sortType] - b[sortType];
};

const firstUpperCase = (string) => {
  if (!string) {
    return;
  }
  return string[0].toUpperCase() + string.slice(1);
};

const divideNumberByPieces = (number) => number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');

const guitarHitDiscount = (totalPrice) => totalPrice - (totalPrice / MAX_PERCENT * Discount.GITARAHIT);

const superGitaraDiscount = (totalPrice) => totalPrice - Discount.SUPERGITARA;

const gitara2020Discount = (totalPrice) => (totalPrice * Discount.GITARA2020.MIN / MAX_PERCENT) <= Discount.GITARA2020.MAX ? totalPrice - (totalPrice * Discount.GITARA2020.MIN / MAX_PERCENT) : totalPrice - Discount.GITARA2020.MAX;

const getNumber = (str) => {

  if (typeof str === 'string') {
    return Number(str.replace(/\D+/g, ''));
  }
  return str;
};

const getSumArrayElements = (array) => {
  let x = 0;
  return array.map((i)=>x+=i, x).reverse()[0];
};

export {
  getGuitarsOnPage,
  filterByType,
  filterByStrings,
  SortingTypes,
  firstUpperCase,
  divideNumberByPieces,
  guitarHitDiscount,
  superGitaraDiscount,
  gitara2020Discount,
  getNumber,
  getSumArrayElements
};
