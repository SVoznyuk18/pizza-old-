/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCurrentOrder,
  getCurrentFilter,
  getCurrentAuth,
} from 'ActionsRoot';
import { Layout } from 'LayoutRoot';
import { Modal, Main } from 'ContainersRoot';
import { PrivatPage, LazyLoad } from 'HocRoot';
// eslint-disable-next-line import/no-unresolved
import { Wrapper } from 'StyledComponentsRoot';

const Cart = lazy(() => import('ContainersRoot/Cart/Cart'));
const Admin = lazy(() => import('ContainersRoot/Admin/Admin'));
const Login = lazy(() => import('ContainersRoot/Login/Login'));

const LazyCart = (props) => <LazyLoad component={Cart} {...props} />;
const LazyAdmin = (props) => <LazyLoad component={Admin} {...props} />;
const LazyLogin = (props) => <LazyLoad component={Login} {...props} />;

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
            <Route path="cart" element={<LazyCart />} />
            <Route
              path="admin"
              element={<PrivatPage><LazyAdmin /></PrivatPage>}
            />
            <Route path="login" element={<LazyLogin />} />
          </Route>
        </Routes>
        <Modal />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
