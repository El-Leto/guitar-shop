import {createSelector} from '@reduxjs/toolkit';
import { filterByType, filterByStrings, SortingTypes } from '../../utils';

const filterByPrice = (item, price) => {
  const {from, to} = price;

  if (!from && !to) {
    return item;
  }
  if (!from) {
    return item.price <= to;
  }
  if (!to) {
    return item.price >= from;
  }
  return item.price >= from && item.price <= to;
};

const getProducts = (state) => state.products;
const getPrice = (state) => state.price;
const getTypes = (state) => state.types;
const getStrings = (state) => state.strings;
const getActiveSort = (state) => state.sorting;
const getActiveSortDirection = (state) => state.direction;
const getCart = (state) => state.carts;
const getTotalPrice = (state) => state.price.total;
const getTotalQuantity = (state) => state.quantity;

const getFilteredArticles = createSelector(getProducts, getPrice, getTypes, getStrings,
  (products, price, types, strings) => (
    products.filter((item) => {
      const filteredByPrice = filterByPrice(item, price);
      const filteredByTypes = filterByType(item, types);
      const filteredByStrings = filterByStrings(item, strings);
      return filteredByPrice && filteredByTypes && filteredByStrings;
    })
  ));

const getSortingArticles = createSelector(getFilteredArticles, getActiveSort, getActiveSortDirection, (products, activeSort, activeDirection) => (
  products
    .slice()
    .sort(SortingTypes(activeSort, activeDirection))
));

export {
  getProducts,
  getPrice,
  getTypes,
  getStrings,
  getActiveSort,
  getActiveSortDirection,
  getFilteredArticles,
  getSortingArticles,
  getCart,
  getTotalPrice,
  getTotalQuantity
};
