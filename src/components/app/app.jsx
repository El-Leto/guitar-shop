import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../../const';
import Catalog from '../pages/catalog/catalog';
import Cart from '../pages/cart/cart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.CATALOG}>
          <Catalog />
        </Route>
        <Route exact path={AppRoute.CART}>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
