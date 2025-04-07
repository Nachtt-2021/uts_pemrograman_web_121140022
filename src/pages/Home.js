import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={`page page-active ${styles.container}`}>
      <h1>Welcome to In CukiShop!</h1>
      <p>Find the best products at the best prices.</p>
      <Link to="/products" className={styles.button}>Shop Now</Link>
    </div>
  );
};

export default Home;
