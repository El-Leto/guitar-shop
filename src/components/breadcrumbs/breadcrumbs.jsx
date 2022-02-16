import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { AppRoute } from '../../const';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs({isCart = false}) {

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={cn(styles.link, styles.link_arrow)} to={AppRoute.CATALOG}>
            Каталог
          </Link>
        </li>
        {isCart &&
        <li className={styles.item}>
          <Link className={cn(styles.link, styles.link_arrow)} to={AppRoute.CART}>
            Оформляем
          </Link>
        </li>}
      </ul>
    </div>
  );
}

Breadcrumbs.propTypes = {
  isCart: PropTypes.bool,
};

export default Breadcrumbs;
