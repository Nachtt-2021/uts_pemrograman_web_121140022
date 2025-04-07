// Cart.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/context";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    checkout,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const success = checkout(); // akan return true/false dari context
    if (success) {
      navigate("/success"); // redirect ke halaman sukses
    }
  };

  return (
    <div className={`page page-active ${styles.cartContainer}`}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is currently empty.</p>
      ) : (
        <>
          <div className={styles.cartList}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.thumbnail} alt={item.title} className={styles.image} />
                <div className={styles.details}>
                  <h3>{item.title}</h3>
                  <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                  <div className={styles.quantity}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id, true)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.summary}>
            <h3>Total: <span>${total.toFixed(2)}</span></h3>
            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
