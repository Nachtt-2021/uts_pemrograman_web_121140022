// src/pages/Checkout.js
import React, { useContext } from "react";
import { CartContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.css"; // Reuse styling dari Cart

const Checkout = () => {
  const { cart, setCart, showNotification } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmCheckout = () => {
    setCart([]); // Kosongkan keranjang
    showNotification("Checkout berhasil! Terima kasih 😊");
    navigate("/products"); // Kembali ke halaman produk
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={styles.itemDetails}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemPrice}>
                    {item.quantity} x ${item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <h3 style={{ textAlign: "right", marginTop: "1rem" }}>Total: ${total.toFixed(2)}</h3>
          <button className={styles.checkoutButton} onClick={handleConfirmCheckout}>
            Confirm Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
