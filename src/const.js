const GUITAR_ON_PAGE = 9;
const DEFAULT_PAGE = 1;
const MIN_COUNT = 1;
const MAX_PERCENT = 100;

const AppRoute = {
  CATALOG: '/',
  CART: '/cart',
};

const SortDirectionButton = {
  FROM_LESS_TO_MORE: 'меньше',
  FROM_MORE_TO_LESS: 'больше',
};

const SortTypeButton = {
  PRICE: 'price',
  REVIEWS: 'reviews',
};

const Promocode = {
  GITARAHIT: 'GITARAHIT',
  SUPERGITARA: 'SUPERGITARA',
  GITARA2020: 'GITARA2020',
};

const Discount = {
  GITARAHIT: 10,
  SUPERGITARA: 700,
  GITARA2020: {
    MIN: 30,
    MAX: 3000,
  },
};

const typesState = [
  {
    id: 'acustic',
    label: 'Акустические гитары',
    value: 'Акустическая гитара',
    isChecked: false,
    isDisabled: false,
    strings: ['6', '7', '12'],
  },
  {
    id: 'electro',
    label: 'Электрогитары',
    value: 'Электрогитара',
    isChecked: false,
    isDisabled: false,
    strings: ['4', '6', '7'],
  },
  {
    id: 'ukulele',
    label: 'Укулеле',
    value: 'Укулеле',
    isChecked: false,
    isDisabled: false,
    strings: ['4'],
  },
];

const stringsState = [
  {
    id: 4,
    value: '4',
    label: '4',
    isChecked: false,
    isDisabled: false,
  },
  {
    id: 6,
    value: '6',
    label: '6',
    isChecked: false,
    disabled: false,
  },
  {
    id: 7,
    value: '7',
    label: '7',
    isChecked: false,
    disabled: false,
  },
  {
    id: 12,
    value: '12',
    label: '12',
    isChecked: false,
    disabled: false,
  },
];

const PopupType = {
  ADD: 'add',
  DELETE: 'delete',
};

export {
  AppRoute,
  GUITAR_ON_PAGE,
  DEFAULT_PAGE,
  MIN_COUNT,
  MAX_PERCENT,
  SortDirectionButton,
  SortTypeButton,
  Promocode,
  Discount,
  typesState,
  stringsState,
  PopupType
};
