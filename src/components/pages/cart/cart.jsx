import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import Header from '../../header/header';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import CartList from '../../cart-list/cart-list';
import Promo from '../../promo/promo';
import Footer from '../../footer/footer';
import { getCart } from '../../../store/data/selectors';
import styles from './cart.module.scss';

function Cart() {
  const cart = useSelector(getCart);

  return (
    <div className={styles.page}>
      <Header />
      <main className={cn('container', styles.wrapper)}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>
            Корзина
          </h1>
          <Breadcrumbs isCart />
        </div>
        {
          cart.length > 0 ?
            <section className={styles.section}>
              <CartList/>
              <div className={styles.promo_wrapper}>
                <Promo/>
              </div>
            </section>
            : <p className={styles.text}>В корзине ничего нет, поищите нужный товар в каталоге.</p>
        }
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
