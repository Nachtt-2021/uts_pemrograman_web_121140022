import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/context";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const context = useContext(CartContext);
  const { cart } = context || { cart: [] };
  const location = useLocation(); // untuk memicu ulang useEffect di route yang sama

  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cart, location.pathname]);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>CukiShop</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/products" className={styles.link}>Products</Link>
        </li>
        <li>
          <Link to="/cart" className={`${styles.link} ${shake ? styles.shake : ""}`}>
            Cart 🛒 ({cart.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
