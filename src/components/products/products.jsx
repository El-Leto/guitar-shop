import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sorting from '../sorting/sorting';
import Product from '../product/product';
import Pagination from '../pagination/pagination';
import { getSortingArticles } from '../../store/data/selectors';
import { getGuitarsOnPage } from '../../utils';
import { GUITAR_ON_PAGE, DEFAULT_PAGE } from '../../const';
import styles from './products.module.scss';

function Products() {

  const products = useSelector(getSortingArticles);

  const [activePage, setActivePage] = useState(DEFAULT_PAGE);

  const productsOnPage = getGuitarsOnPage(products, activePage);

  const totalPages = Math.ceil(products.length / GUITAR_ON_PAGE);

  const paginate = (pageNumber) => {
    if (pageNumber === activePage) {
      return;
    }

    setActivePage(pageNumber);
  };

  return (
    <div className={styles.wrapper}>
      <Sorting />
      <ul className={styles.list}>
        {
          productsOnPage.map((product) => (
            <Product product={product} key={product.id}/>
          ))
        }
      </ul>
      <Pagination
        activePage={activePage}
        onActivePage={setActivePage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
}

export default Products;
