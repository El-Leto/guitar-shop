import { createReducer } from '@reduxjs/toolkit';
import electro from '../../images/electro.png';
import ukulele from '../../images/ukulele.png';
import acustic from '../../images/acustic.png';
import { getSumArrayElements } from '../../utils';
import {
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
} from '../action';

const products = [
  {
    id: 1,
    article: 'SO757575',
    name: 'Честер Bass',
    type: 'Электрогитара',
    reviews: 15,
    strings: 7,
    price: 17500,
    image: electro,
    quantity: 1,
  },
  {
    id: 2,
    article: 'TK129049',
    name: 'СURT Z300',
    type: 'Электрогитара',
    reviews: 9,
    strings: 7,
    price: 29500,
    image: electro,
    quantity: 1,
  },
  {
    id: 3,
    article: 'RO111111',
    name: 'Roman LX',
    type: 'Укулеле',
    reviews: 21,
    strings: 4,
    price: 6800,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 4,
    article: 'TK436457',
    name: 'СURT T300',
    type: 'Электрогитара',
    reviews: 15,
    strings: 6,
    price: 30000,
    image: electro,
    quantity: 1,
  },
  {
    id: 5,
    article: 'DI192138',
    name: 'Dania Super',
    type: 'Акустическая гитара',
    reviews: 5,
    strings: 7,
    price: 3500,
    image: acustic,
    quantity: 1,
  },
  {
    id: 6,
    article: 'SO934345',
    name: 'Честер WX',
    type: 'Электрогитара',
    reviews: 17,
    strings: 6,
    price: 15300,
    image: electro,
    quantity: 1,
  },
  {
    id: 7,
    article: 'DI082347',
    name: 'Dania VX',
    type: 'Укулеле',
    reviews: 5,
    strings: 4,
    price: 2200,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 8,
    article: 'SO135646',
    name: 'Честер Plus',
    type: 'Электрогитара',
    reviews: 27,
    strings: 4,
    price: 30000,
    image: electro,
    quantity: 1,
  },
  {
    id: 9,
    article: 'VO154751',
    name: 'Виолана 300',
    type: 'Акустическая гитара',
    reviews: 3,
    strings: 7,
    price: 1700,
    image: acustic,
    quantity: 1,
  },
  {
    id: 10,
    article: 'TK244556',
    name: 'СURT Classic',
    type: 'Электрогитара',
    reviews: 20,
    strings: 4,
    price: 23000,
    image: electro,
    quantity: 1,
  },
  {
    id: 11,
    article: 'TK134663',
    name: 'СURT Z250',
    type: 'Электрогитара',
    reviews: 19,
    strings: 4,
    price: 18700,
    image: electro,
    quantity: 1,
  },
  {
    id: 12,
    article: 'SO123212',
    name: 'Честер 7X',
    type: 'Электрогитара',
    reviews: 30,
    strings: 7,
    price: 35000,
    image: electro,
    quantity: 1,
  },
  {
    id: 13,
    article: 'SO123234',
    name: 'Честер 6V',
    type: 'Электрогитара',
    reviews: 28,
    strings: 6,
    price: 14900,
    image: electro,
    quantity: 1,
  },
  {
    id: 14,
    article: 'VO519510',
    name: 'Виолана Mix',
    type: 'Акустическая гитара',
    reviews: 7,
    strings: 6,
    price: 7600,
    image: acustic,
    quantity: 1,
  },
  {
    id: 15,
    article: 'VO457369',
    name: 'Виолана 250x',
    type: 'Акустическая гитара',
    reviews: 19,
    strings: 6,
    price: 6500,
    image: acustic,
    quantity: 1,
  },
  {
    id: 16,
    article: 'FB625903',
    name: 'Фабио Лайт',
    type: 'Акустическая гитара',
    reviews: 26,
    strings: 7,
    price: 12000,
    image: acustic,
    quantity: 1,
  },
  {
    id: 17,
    article: 'FB576948',
    name: 'Фабио L100',
    type: 'Акустическая гитара',
    reviews: 31,
    strings: 7,
    price: 9900,
    image: acustic,
    quantity: 1,
  },
  {
    id: 18,
    article: 'LU012032',
    name: 'Liana Z200',
    type: 'Акустическая гитара',
    reviews: 28,
    strings: 12,
    price: 8900,
    image: acustic,
    quantity: 1,
  },
  {
    id: 19,
    article: 'LU546853',
    name: 'Liana Z100',
    type: 'Акустическая гитара',
    reviews: 34,
    strings: 12,
    price: 10500,
    image: acustic,
    quantity: 1,
  },
  {
    id: 20,
    article: 'LU458283',
    name: 'Liana Z300',
    type: 'Акустическая гитара',
    reviews: 9,
    strings: 6,
    price: 13300,
    image: acustic,
    quantity: 1,
  },
  {
    id: 21,
    article: 'RO324341',
    name: 'Roman RX',
    type: 'Укулеле',
    reviews: 37,
    strings: 4,
    price: 4800,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 22,
    article: 'RO214235',
    name: 'Roman TX',
    type: 'Укулеле',
    reviews: 5,
    strings: 4,
    price: 1900,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 23,
    article: 'DI132414',
    name: 'Dania U100',
    type: 'Укулеле',
    reviews: 23,
    strings: 4,
    price: 2500,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 24,
    article: 'DI934754',
    name: 'Dania WR',
    type: 'Укулеле',
    reviews: 3,
    strings: 4,
    price: 3800,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 25,
    article: 'DI034292',
    name: 'Dania LE',
    type: 'Укулеле',
    reviews: 10,
    strings: 4,
    price: 4100,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 26,
    article: 'MI193214',
    name: 'Mirana V10',
    type: 'Укулеле',
    reviews: 14,
    strings: 4,
    price: 2700,
    image: ukulele,
    quantity: 1,
  },
  {
    id: 27,
    article: 'VO043244',
    name: 'Виолана Mini',
    type: 'Укулеле',
    reviews: 29,
    strings: 4,
    price: 6700,
    image: ukulele,
    quantity: 1,
  },
];

const initialState  = {
  products: products,
  types: [],
  strings: [],
  sorting: '',
  direction: 'меньше',
  carts: [],
  price: {
    from: '',
    to: '',
    total: 0,
  },
  quantity: 0,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(changeTypes, (state, action) => {
      state.types = action.payload;
    })
    .addCase(changeStrings, (state, action) => {
      state.strings = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(changeSortDirection, (state, action) => {
      state.direction = action.payload;
    })
    .addCase(addToCart, (state, action) => {
      if (state.carts.some((item) => item.id === action.payload.id)) {
        const carts = state.carts.map(
          (item) => item.id !== action.payload.id ? item : {...item, quantity: item.quantity + 1},
        );
        state.carts = carts;
      } else {
        state.carts.push({...action.payload, quantity: 1});
      }
    })
    .addCase(deleteFromCart, (state, action) => {
      const index = state.carts.findIndex((item) => item.id === action.payload.id);
      state.carts.splice(index, 1);
    })
    .addCase(changeQuantity, (state, action) => {
      const index = state.carts.findIndex((item) => item.id === action.payload.id);

      state.carts[index].quantity = action.payload.quantity;
    })
    .addCase(increaseTotalPrice, (state, action) => {
      state.price.total = state.price.total + action.payload;
    })
    .addCase(decreaseTotalPrice, (state, action) => {
      state.price.total = state.price.total - action.payload;
    })
    .addCase(addPriceFrom, (state, action) => {
      state.price.from = action.payload;
    })
    .addCase(addPriceTo, (state, action) => {
      state.price.to = action.payload;
    })
    .addCase(changeTotalQuantity, (state, action) => {
      const totalQuantity = state.carts.map((item) => {
        let total = 0;
        total = total + item.quantity;
        return total;
      });
      state.quantity = getSumArrayElements(totalQuantity);
    });
});

export { data };
