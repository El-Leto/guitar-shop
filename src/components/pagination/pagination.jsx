import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './pagination.module.scss';

function Pagination({ activePage, setActivePage, totalPages, paginate }) {

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++ ) {
      pageNumbers.push(i);
    }

    setPages(pageNumbers);
  }, [totalPages]);

  return (
    <div className={styles.wrapper}>
      {
        activePage > 1 &&
        <button
          className={styles.button}
          type='button'
          onClick={() => setActivePage((prevPage) => prevPage - 1)}
        >
          Назад
        </button>
      }
      <ul className={styles.list}>
        {
          pages.length > 1 &&
          pages.map((page) => (
            <li className={styles.item} key={page}>
              <button
                className={page === activePage ? cn(styles.page, styles.page_active) : styles.page}
                onClick={() => paginate(page)}
              >
                {page}
              </button>
            </li>
          ))
        }
      </ul>
      {
        activePage < totalPages &&
        <button
          className={styles.button}
          type='button'
          onClick={() => setActivePage((prevPage) => prevPage + 1)}
        >
          Далее
        </button>
      }
    </div>
  );
}

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
