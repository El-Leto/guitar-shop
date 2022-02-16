import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from '../modal/modal';
import { ModalSuccess } from '../modal-success/modal-success';
import { addToCart, increaseTotalPrice } from '../../store/action';
import star from '../../images/star.svg';
import starEmpty from '../../images/star-empty.svg';
import { PopupType } from '../../const';
import { divideNumberByPieces } from '../../utils';
import styles from './product.module.scss';

function Product({ product }) {
  const {name, price, image, reviews, article, type, strings} = product;

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen || isModalSuccessOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isModalSuccessOpen]);

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  const handleAddButtonClick = (evt) => {
    evt.preventDefault();
    dispatch(addToCart(product));
    dispatch(increaseTotalPrice(price));
    setIsModalOpen(false);
    setIsModalSuccessOpen(true);
  };

  return (
    <li className={styles.item}>
      <div className={styles.image_wrapper}><img className={styles.image} src={image} alt={name} width="68" height="190"/></div>
      <div className={styles.description}>
        <div className={styles.rate}>
          <div role="img" aria-label="Рейтинг 4 из 5" className={styles.rating}>
            <img className={styles.star} src={star} alt="" />
            <img className={styles.star} src={star} alt="" />
            <img className={styles.star} src={star} alt="" />
            <img className={styles.star} src={star} alt="" />
            <img className={styles.star} src={starEmpty} alt="" />
          </div>
          <span className={styles.reviews}>{reviews}</span>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.price}>{divideNumberByPieces(price)} ₽</p>
        </div>
        <div className={styles.buttons}>
          <a href="/" className={styles.button_more}>Подробнее</a>
          <button
            className={styles.button_buy}
            onClick={handleButtonClick}
          >
          Купить
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          popupType={PopupType.ADD}
          onClose={() => {
            dispatch(setIsModalOpen(false));
            document.body.style = 'overflow: visible;';
          }}
          setIsModalOpen={setIsModalOpen}
          name={name}
          img={image}
          article={article}
          type={type}
          strings={strings}
          price={price}
          handleButtonClick={handleAddButtonClick}
        />
      )}
      {isModalSuccessOpen && <ModalSuccess isOpen={isModalSuccessOpen} setIsModalOpen={setIsModalSuccessOpen}/>}
    </li>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    strings: PropTypes.number.isRequired,
  }),
};

export default Product;
