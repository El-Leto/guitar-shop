import { createAction } from '@reduxjs/toolkit';


const ActionType = {
  CHANGE_TYPES: 'changeTypes',
  CHANGE_STRINGS: 'changeStrings',
  CHANGE_SORT: 'changeSort',
  CHANGE_SORT_DIRECTION: 'changeSortDirection',
  ADD_TO_CART: 'addToCart',
  DELETE_FROM_CART: 'deleteFromCart',
  CHANGE_QUANTITY: 'changeQuantity',
  INCREASE_TOTAL_PRICE: 'increaseTotalPrice',
  DECREASE_TOTAL_PRICE: 'decreaseTotalPrice',
  ADD_PRICE_FROM: 'addPriceFrom',
  ADD_PRICE_TO: 'addPriceTo',
  CHANGE_TOTAL_QUANTITY: 'changeTotalQuantity',
};

const changeTypes = createAction(ActionType.CHANGE_TYPES, (payload) => ({
  payload,
}));

const changeStrings = createAction(ActionType.CHANGE_STRINGS, (payload) => ({
  payload,
}));

const changeSort = createAction(ActionType.CHANGE_SORT, (payload) => ({
  payload,
}));

const changeSortDirection = createAction(ActionType.CHANGE_SORT_DIRECTION, (payload) => ({
  payload,
}));

const addToCart = createAction(ActionType.ADD_TO_CART, (payload) => ({
  payload,
}));

const deleteFromCart = createAction(ActionType.DELETE_FROM_CART, (payload) => ({
  payload,
}));

const changeQuantity = createAction(ActionType.CHANGE_QUANTITY, (payload) => ({
  payload,
}));

const increaseTotalPrice = createAction(ActionType.INCREASE_TOTAL_PRICE, (payload) => ({
  payload,
}));

const decreaseTotalPrice = createAction(ActionType.DECREASE_TOTAL_PRICE, (payload) => ({
  payload,
}));

const addPriceFrom = createAction(ActionType.ADD_PRICE_FROM, (payload) => ({
  payload,
}));

const addPriceTo = createAction(ActionType.ADD_PRICE_TO, (payload) => ({
  payload,
}));

const changeTotalQuantity = createAction(ActionType.CHANGE_TOTAL_QUANTITY, (payload) => ({
  payload,
}));


export {
  changeTypes,
  changeStrings,
  changeSort,
  changeSortDirection,
  addToCart,
  deleteFromCart,
  changeQuantity,
  increaseTotalPrice,
  decreaseTotalPrice,
  addPriceFrom,
  addPriceTo,
  changeTotalQuantity
};
