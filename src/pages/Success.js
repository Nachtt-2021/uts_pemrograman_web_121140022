// Success.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Success.module.css";;

const Success = () => {
  return (
    <div className={styles.successContainer}>
      <h2>🎉 Checkout Successful!</h2>
      <p>Thank you for your purchase. Your order is being processed.</p>
      <div className={styles.buttons}>
        <Link to="/products" className={styles.btn}>Continue Shopping</Link>
        <Link to="/" className={styles.btn}>Back to Home</Link>
      </div>
    </div>
  );
};

export default Success;
