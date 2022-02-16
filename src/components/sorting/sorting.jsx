import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { changeSort, changeSortDirection } from '../../store/action';
import { getActiveSort, getActiveSortDirection} from '../../store/data/selectors';
import { SortTypeButton, SortDirectionButton } from '../../const';
import styles from './sorting.module.scss';

function Sorting() {

  const dispatch = useDispatch();
  const activeSort = useSelector(getActiveSort);
  const activeSortDirection = useSelector(getActiveSortDirection);

  const handleSortButton = (evt) => {
    const sort = evt.target.name;
    dispatch(changeSort(sort));
  };

  const handleDirectionButton = (evt) => {
    const direction = evt.target.name;
    dispatch(changeSortDirection(direction));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className='visually-hidden'>Сортировка</h2>
      <p className={styles.text}>Сортировать:</p>
      <div>
        <button
          className={activeSort === SortTypeButton.PRICE ? cn(styles.button, styles.button__active) : styles.button}
          type="button"
          name="price"
          onClick={handleSortButton}
        >
          по цене
        </button>
        <button
          className={activeSort === SortTypeButton.REVIEWS ? cn(styles.button, styles.button__active) : styles.button}
          type="button"
          name="reviews"
          onClick={handleSortButton}
        >
          по популярности
        </button>
      </div>
      <div className={styles.direction}>
        <button
          className={activeSortDirection === SortDirectionButton.FROM_LESS_TO_MORE ? cn(styles.button_direction, styles.button_direction__up__active) : cn(styles.button_direction, styles.button_direction__up)}
          type="button"
          name="меньше"
          onClick={handleDirectionButton}
          aria-label="Отсортировать по возрастанию"
        />
        <button
          className={activeSortDirection === SortDirectionButton.FROM_MORE_TO_LESS? cn(styles.button_direction, styles.button_direction__down__active) : cn(styles.button_direction, styles.button_direction__down)}
          type="button"
          name="больше"
          onClick={handleDirectionButton}
          aria-label="Отсортировать по убыванию"
        />
      </div>
    </div>
  );
}

export default Sorting;
