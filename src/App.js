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
  const { cart, totalPrice, totalAmount } = useSelector(state => state.cart);
  const { activeCategory, sortBy } = useSelector(state => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getCurrentOrder({
      cartStorage: JSON.parse(window.localStorage.getItem('cart')) || cart,
      totalPriceStorage: JSON.parse(window.localStorage.getItem('totalPrice')) || totalPrice,
      totalAmountStorage: JSON.parse(window.localStorage.getItem('totalAmount')) || totalAmount
    }));

    dispatch(getCurrentFilter({
      activeCategoryStorage: JSON.parse(window.localStorage.getItem('activeCategory')) || activeCategory,
      sortByStorage: JSON.parse(window.localStorage.getItem('sortBy')) || sortBy
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
