import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { getCart } from '../../store/data/selectors';
import styles from './cart-list.module.scss';

function CartList() {

  const cart = useSelector(getCart);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {
          cart.map((product) => (
            <CartItem product={product} key={product.id}/>
          ))
        }
      </ul>
    </div>
  );
}

export default CartList;
