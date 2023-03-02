import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleToggleModal, getCurrentOrder, getCurrentFilter } from "Actions";

import Main from "./pages/Main";
import { Header } from 'Components';
import { Wrapper } from './pages/StyledComponents';
import Modal from './pages/modal/Modal';
import Cart from "./pages/Cart";

function App() {

  const { isOpenModal, modalType, payload } = useSelector(state => state.modal);
  const { totalPrice, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getCurrentOrder({
      cartStorage: JSON.parse(window.localStorage.getItem('cart')) || [],
      totalPriceStorage: JSON.parse(window.localStorage.getItem('totalPrice')),
      totalAmountStorage: JSON.parse(window.localStorage.getItem('totalAmount'))
    }));

    dispatch(getCurrentFilter({
      activeCategoryStorage: JSON.parse(window.localStorage.getItem('activeCategory')),
      sortByStorage: JSON.parse(window.localStorage.getItem('sortBy'))
    }));
  }, []);

  return (
    <Wrapper>
      <BrowserRouter>
        <Header totalPrice={totalPrice} totalAmount={totalAmount} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Modal
          isOpenModal={isOpenModal}
          modalType={modalType}
          payload={payload}
          closeModal={() => dispatch(handleToggleModal(false, modalType))}
        />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
