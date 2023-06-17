import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Products from "./Products";
import Checkout from "./Checkout";
import Nav from "./components/Nav";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
