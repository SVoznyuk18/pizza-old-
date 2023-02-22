import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleToggleModal } from "./redux/actions";

import Main from "./pages/Main";
import { Header } from './components/index';
import Modal from './pages/modal/Modal';
import Cart from "./pages/Cart";


function App() {

  const { isOpenModal, modalType, payload } = useSelector(state => state.modal);
  const { totalPrice, totalAmount } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header  totalPrice={totalPrice} totalAmount={totalAmount}/>
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
    </div>
  );
}

export default App;
