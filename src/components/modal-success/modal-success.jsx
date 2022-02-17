import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../const';
import styles from './modal-success.module.scss';

function ModalSuccess({
  isOpen,
  onIsModalOpen,
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
            Товар успешно добавлен в корзину
          </h2>
          <button
            className={styles.button}
            onClick={() => onIsModalOpen(false)}
            type="button"
            aria-label="Закрыть"
          />
        </div>
        <div className={styles.buttons}>
          <Link className={styles.button_link} to={AppRoute.CART}>
            Перейти в корзину
          </Link>
          <button
            className={cn(styles.button_next, styles.button_add_action)}
            type="button"
            onClick={() => onIsModalOpen(false)}
          >
            Продолжить покупки
          </button>
        </div>
      </section>
    </ReactModal>
  );
}

ModalSuccess.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onIsModalOpen: PropTypes.func.isRequired,
};

export { ModalSuccess };
