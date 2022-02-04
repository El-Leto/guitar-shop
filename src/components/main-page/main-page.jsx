import React from 'react';
import Header from '../header/header';
// import Slider from '../slider/slider';
// import Tabs from '../tabs/tabs';
// import Calculator from '../calculator/calculator';
// import YandexMap from '../yandex-map/yandex-map';
import Footer from '../footer/footer';
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* <Slider />
        <Tabs />
        <Calculator />
        <YandexMap /> */}
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
