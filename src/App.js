import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import { Header } from './components/index';
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
