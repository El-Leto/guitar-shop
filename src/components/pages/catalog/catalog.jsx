import React from 'react';
import cn from 'classnames';
import Header from '../../header/header';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';
import Filter from '../../filter/filter';
import Products from '../../products/products';
import Footer from '../../footer/footer';
import styles from './catalog.module.scss';

function Catalog() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={cn('container', styles.wrapper)}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>
            Каталог гитар
          </h1>
          <Breadcrumbs />
        </div>
        <Filter />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default Catalog;
