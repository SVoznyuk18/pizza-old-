import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleToggleModal } from "./redux/actions";

import Main from "./pages/Main";
import { Header } from './components/index';
import {Wrapper} from './pages/StyledComponents';
import Modal from './pages/modal/Modal';
import Cart from "./pages/Cart";


function App() {

  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const { isOpenModal, modalType, payload } = useSelector(state => state.modal);
  const { totalPrice, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleResize = () => {
    setScreenWidth(window.screen.width);
};

useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, [screenWidth]);


  return (
    <Wrapper>
         <BrowserRouter>
        <Header  totalPrice={totalPrice} totalAmount={totalAmount} screenWidth={screenWidth}/>
        <Routes>
          <Route path="/" element={<Main screenWidth={screenWidth} />} />
          <Route path="cart" element={<Cart screenWidth={screenWidth} />} />
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
