import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { PopupType } from '../../const';
import { divideNumberByPieces } from '../../utils';
import styles from './modal.module.scss';

function Modal({
  isOpen,
  onIsModalOpen,
  popupType,
  name,
  img,
  article,
  type,
  strings,
  price,
  onButtonClick,
}) {

  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={() => onIsModalOpen(false)}
      style={{
        overlay: { backgroundColor: 'rgba(88, 87, 87, 0.6)', zIndex: '10000' },
      }}
      ariaHideApp={false}
    >
      <section className={styles.wrapper}>
        <div className={styles.top}>
          <h2 className={styles.title}>
            {popupType === PopupType.ADD ? 'Добавить товар в корзину' : 'Удалить этот товар?'}
          </h2>
          <button
            className={styles.button}
            onClick={() => onIsModalOpen(false)}
            type="button"
            aria-label="Закрыть"
          />
        </div>
        <div className={styles.description_wrapper}>
          <img className={styles.image} src={img} alt={name} width="56" height="128" />
          <div className={styles.description}>
            <h3 className={styles.name}>Гитара {name}</h3>
            <p className={styles.text}>Артикул: {article}</p>
            <p className={styles.text}>{type}, {strings} струнная</p>
            <p className={styles.price}>Цена: {divideNumberByPieces(price)} ₽</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button_add}
            type="button"
            onClick={onButtonClick}
          >
            {popupType === PopupType.ADD ? 'Добавить в корзину' : 'Удалить товар'}
          </button>
          {popupType === PopupType.DELETE && (
            <button
              className={styles.button_next}
              type="button"
              onClick={() => onIsModalOpen(false)}
            >
              Продолжить покупки
            </button>
          )}
        </div>
      </section>
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onIsModalOpen: PropTypes.func.isRequired,
  popupType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  strings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export { Modal };
