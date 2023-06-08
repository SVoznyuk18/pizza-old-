import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentOrder,
  getCurrentFilter,
  getCurrentAuth,
} from 'ActionsRoot';
import { Layout } from 'LayoutRoot';
import {
  Admin,
  Modal,
  Login,
  Cart,
  Main,
} from 'ContainersRoot';
// eslint-disable-next-line import/no-unresolved
import { Wrapper } from 'StyledComponentsRoot';
import PrivatPage from './hoc/PrivatPage';

function App() {
  const { cart, totalPrice, totalAmount } = useSelector((state) => state.cart);
  const { activeCategory, sortBy } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentOrder({
      cartStorage: JSON.parse(window.localStorage.getItem('cart')) || cart,
      totalPriceStorage: JSON.parse(window.localStorage.getItem('totalPrice')) || totalPrice,
      totalAmountStorage: JSON.parse(window.localStorage.getItem('totalAmount')) || totalAmount,
    }));

    dispatch(getCurrentFilter({
      activeCategoryStorage: JSON.parse(window.localStorage.getItem('activeCategory')) || activeCategory,
      sortByStorage: JSON.parse(window.localStorage.getItem('sortBy')) || sortBy,
    }));

    if (window.localStorage.getItem('auth') !== null) {
      dispatch(getCurrentAuth({
        currentAuth: JSON.parse(window.localStorage.getItem('auth')),
      }));
    }
  }, []);

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="admin"
              element={<PrivatPage><Admin /></PrivatPage>}
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
        <Modal />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
