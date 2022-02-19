import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { changeTypes, changeStrings, addPriceFrom, addPriceTo } from '../../store/action';
import { getProducts } from '../../store/data/selectors';
import Input from '../input/input';
import { MIN_COUNT, typesState, stringsState } from '../../const';
import { getNumber } from '../../utils';
import styles from './filter.module.scss';

function Filter() {

  const dispatch = useDispatch();

  const [priceTo, setPriceTo] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [types, setTypes] = useState(typesState);
  const [strings, setStrings] = useState(stringsState);

  const products = useSelector(getProducts);

  const maxPrice = products.reduce((arr, current) => {
    if (current.price > arr) {
      arr = current.price;
    }

    return arr;
  }, 0);

  const minPrice = products.reduce((arr, current, index) => {
    if (index === MIN_COUNT) {
      arr = current.price;
    }

    if (index > MIN_COUNT && current.price < arr) {
      arr = current.price;
    }

    return arr;
  }, 0);

  useEffect(() => {
    dispatch(addPriceFrom(priceFrom));

    dispatch(addPriceTo(priceTo));

    const stringsArray = [];

    strings.forEach((item) => {
      if (item.isChecked) {
        stringsArray.push(item.value);
      }
    });

    const typesArray = [];

    types.forEach((item) => {
      if (item.isChecked) {
        typesArray.push(item.value);
      }
    });

    dispatch(changeStrings(stringsArray));

    dispatch(changeTypes(typesArray));
  }, [dispatch, priceFrom, priceTo, types, strings]);

  useEffect(() => {
    const activeTypes = types.filter((item) => item.isChecked);

    const activeStrings = activeTypes.reduce((array, current) => {
      array.push(...current.strings);
      return array;
    }, []);

    const activeStringsState = new Set(activeStrings);

    setStrings((prev) => prev.map((item) => {
      item.isDisabled = !activeStringsState.has(item.value);

      if (!activeStringsState.size) {
        item.isDisabled = false;
      }

      if (item.isDisabled) {
        item.isChecked = false;
      }

      return item;
    }));

  }, [types]);

  const handlePriceChange = (evt) => {
    const {name, value} = evt.target;
    if (isNaN(value) || value.length > '7') {
      return;
    }

    if (name === 'from') {
      setPriceFrom(value);
    }

    if (name === 'to') {
      setPriceTo(getNumber(value));
    }
  };

  const handlePriceBlue = (e) => {
    const {name} = e.target;

    if (+priceFrom > +priceTo && name === 'from' && priceTo) {
      setPriceFrom(getNumber(priceTo));
    }

    if (priceFrom < minPrice && priceFrom) {
      setPriceFrom(minPrice);
    }

    if (+priceTo < +priceFrom && name === 'to' && priceFrom) {
      setPriceTo(getNumber(priceFrom));
    }

    if (priceTo > maxPrice && priceTo) {
      setPriceTo(maxPrice);
    }
  };

  const handleTypeChange = (e) => {
    const {checked, value} = e.target;
    const array = types.slice();
    array.forEach((item) => {
      if (item.value === value) {
        item.isChecked = checked;
      }
    });

    setTypes(array);
  };

  const handleStringsChange = (e) => {
    const {checked, value} = e.target;
    const array = strings.slice();
    array.forEach((item) => {
      if (item.value === value) {
        item.isChecked = checked;
      }
    });

    setStrings(array);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={cn(styles.title, styles.title_first)}>Фильтр</h2>
      <form action="#" method='post'>
        <div>
          <h3 className={styles.title}>Цена, ₽</h3>
          <div className={styles.price}>
            <label>
              <span className="visually-hidden">Ввести цену от</span>
              <input
                type="text"
                placeholder={minPrice}
                aria-label="Цена от"
                name={'from'}
                className={styles.input_price}
                onBlur={handlePriceBlue}
                onChange={handlePriceChange}
                value={priceFrom}
              />
            </label>
            <label>
              <span className="visually-hidden">Ввести цену до</span>
              <input
                type="text"
                placeholder={maxPrice}
                aria-label="Цена до"
                name={'to'}
                className={styles.input_price}
                onBlur={handlePriceBlue}
                onChange={handlePriceChange}
                value={priceTo}
              />
            </label>
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Тип гитар</h3>
          <ul className={styles.list}>
            {
              typesState.map(({id, label, value, isChecked, isDisabled}) => (
                <li key={id} className={styles.item}>
                  <Input
                    type="checkbox"
                    name='type'
                    id={id}
                    checked={isChecked}
                    disabled={isDisabled}
                    value={value}
                    className={cn('visually-hidden', styles.checkbox_input)}
                    onChange={handleTypeChange}
                  />
                  <label className={styles.checkbox} htmlFor={id}>{label}</label>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Количество струн</h3>
          <ul className={styles.list}>
            {
              stringsState.map(({id, label, value, isChecked, isDisabled}) => (
                <li key={id} className={styles.item}>
                  <Input
                    type="checkbox"
                    name='string'
                    id={id}
                    checked={isChecked}
                    disabled={isDisabled}
                    value={value}
                    className={cn('visually-hidden', styles.checkbox_input)}
                    onChange={handleStringsChange}
                  />
                  <label className={styles.checkbox} htmlFor={id}>{label}</label>
                </li>
              ))
            }
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Filter;
