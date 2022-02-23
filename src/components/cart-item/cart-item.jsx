import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Modal } from '../modal/modal';
import { deleteFromCart, changeQuantity, increaseTotalPrice, decreaseTotalPrice, changeTotalQuantity } from '../../store/action';
import { getTotalPrice } from '../../store/data/selectors';
import { MIN_COUNT, MAX_COUNT, PopupType } from '../../const';
import { divideNumberByPieces } from '../../utils';
import styles from './cart-item.module.scss';

function CartItem({ product }) {

  const {id, name, price, image, article, type, strings, quantity} = product;

  const dispatch = useDispatch();

  const totalPrice = useSelector(getTotalPrice);

  const [count, setCount] = useState(quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    dispatch(changeQuantity({id: id, quantity: count}));
    dispatch(changeTotalQuantity(product));
  }, [id, dispatch, count, product]);

  const handleDeleteButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(deleteFromCart({id: id}));
    dispatch(decreaseTotalPrice(price * count));
    dispatch(changeTotalQuantity(product));
    setIsModalOpen(false);
  };

  const handleMinusButtonClick = () => {
    if (count === MIN_COUNT) {
      setIsModalOpen(true);
      return;
    }

    setCount(((prevState) => prevState - 1));
    dispatch(decreaseTotalPrice(price));
    dispatch(changeTotalQuantity(product));
  };

  const handlePlusButtonClick = () => {
    if (count >= MAX_COUNT) {
      setCount(MAX_COUNT);
      return;
    }

    setCount(((prevState) => prevState + 1));
    dispatch(increaseTotalPrice(price));
    dispatch(changeTotalQuantity(product));
  };

  const handleInputChange = (evt) => {
    const value = +evt.target.value;
    const prevValue = count;

    if (isNaN(value)) {
      return;
    }

    if (value < 0) {
      return;
    }

    if (value > 99) {
      totalPrice < MAX_COUNT * price &&
      setCount(MAX_COUNT);
      dispatch(increaseTotalPrice((MAX_COUNT - prevValue) * price));
      return;

    }

    value > prevValue ? dispatch(increaseTotalPrice((value - prevValue) * price)) : dispatch(decreaseTotalPrice((prevValue - value) * price));
    setCount(value);
  };

  return (
    <li className={styles.item}>
      <div className={styles.description_wrapper}>
        <button
          className={styles.button}
          onClick={() => setIsModalOpen(true)}
          type="button"
          aria-label="Закрыть"
        />
        <img className={styles.image} src={image} alt={name} width="56" height="128" />
        <div className={styles.description}>
          <h3 className={styles.name}>Гитара {name}</h3>
          <p className={styles.text}>Артикул: {article}</p>
          <p className={styles.text}>{type}, {strings} струнная</p>
        </div>
      </div>
      <div className={styles.price_wrapper}>
        <p className={cn(styles.price, styles.price_one)}>{divideNumberByPieces(price)} ₽</p>
        <div className={styles.quantity_wrapper}>
          <button
            className={cn(styles.button_quantity, styles.button_quantity_minus)}
            type="button"
            onClick={handleMinusButtonClick}
            aria-label="Уменьшить количество товара"
          />
          <label>
            <span className="visually-hidden">Изменение количества товара</span>
            <input
              className={styles.quantity_input}
              type="text"
              value={count}
              onChange={handleInputChange}
            />
          </label>
          <button
            className={cn(styles.button_quantity, styles.button_quantity_plus)}
            type="button"
            onClick={handlePlusButtonClick}
            aria-label="Увеличить количество товара"
          />
        </div>
        <p className={cn(styles.price, styles.price_total)}>{divideNumberByPieces(price * count)} ₽</p>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          popupType={PopupType.DELETE}
          onClose={() => {
            dispatch(setIsModalOpen(false));
            document.body.style = 'overflow: visible;';
          }}
          onIsModalOpen={setIsModalOpen}
          name={name}
          img={image}
          article={article}
          type={type}
          strings={strings}
          price={price}
          onButtonClick={handleDeleteButtonClick}
        />
      )}
    </li>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
};

export default CartItem;
