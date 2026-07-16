import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Contacts from "../components/Contacts";
import { prettyDOM } from "@testing-library/dom";
import Cart from "../components/Cart";

const AppRouter = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/contacts">Контакты</Link>
        <button className="cart-btn" onClick={toggleCart}>
          Корзина
          <span className="cart-count">{cart.length}</span>
        </button>
      </nav>
      {isCartOpen && (
        <Cart
          toggleCart={toggleCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={<ProductList addToCart={addToCart} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
