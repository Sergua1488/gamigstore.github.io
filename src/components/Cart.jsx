import React from "react";
import "../Cart.css";

const Cart = ({ cart, toggleCart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (sum, product) => sum + Number(product.price),
    0,
  );

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Корзина</h2>
          <button className="close-btn" onClick={toggleCart}>
            Х
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Корзина пуста</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((product) => (
                <div key={product.id} className="cart-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cart-item-img"
                  />

                  <div className="cart-info">
                    <h3>{product.name}</h3>
                    <p>{product.price} ТГ</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Удалить
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3>Итого: {totalPrice} ТГ</h3>
              <button className="checkout-btn">Оформить заказ</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
