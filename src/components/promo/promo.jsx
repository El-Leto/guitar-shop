import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../store/data/selectors';
import { Promocode } from '../../const';
import { guitarHitDiscount,  superGitaraDiscount, gitara2020Discount, divideNumberByPieces } from '../../utils';
import styles from './promo.module.scss';

const MAX_LENGTH = 11;

function Promo() {

  const totalPrice = useSelector(getTotalPrice);
  const [price, setPrice] = useState(totalPrice);
  const [promocode, setPromocode] = useState('');
  const [isPromoValid, setIsPromoValid] = useState(true);

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);

  const handleInputChange = (e) => {
    const {value} = e.target;

    if (value.length > MAX_LENGTH) {
      return;
    }

    setPromocode(value.trim());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    switch (promocode) {
      case Promocode.GITARAHIT:
        setPrice(guitarHitDiscount(totalPrice));
        setIsPromoValid(true);
        break;

      case Promocode.SUPERGITARA:
        setPrice(superGitaraDiscount(totalPrice));
        setIsPromoValid(true);
        break;

      case Promocode.GITARA2020:
        setPrice(gitara2020Discount(totalPrice));
        setIsPromoValid(true);
        break;

      default:
        setPrice(totalPrice);
        setIsPromoValid(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>Промокод на скидку</h3>
        <p className={styles.text}>Введите свой промокод, если он у вас есть.</p>
        <form
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          <label>
            <input
              className={styles.input}
              type="text"
              required
              value={promocode}
              onChange={handleInputChange}
            />
          </label>
          <button
            className={styles.button}
            type="submit"
          >
            Применить купон
          </button>
        </form>
        {!isPromoValid && <p className={styles.error}> Промокод недействителен</p>}
      </div>
      <div className={styles.order}>
        <p className={styles.price}>Всего: {divideNumberByPieces(price)} ₽</p>
        <button
          className={styles.button_order}
          type="button"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default Promo;
