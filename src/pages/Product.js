import React, { useContext, useState } from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import styles from "../styles/Products.module.css";
import { CartContext } from "../context/context";

const Products = () => {
  const { products } = useFetchProducts();
  const { addToCart } = useContext(CartContext);
  const [sortType, setSortType] = useState("");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "asc") return a.price - b.price;
    if (sortType === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className={`page page-active ${styles.container}`}>
      <h2>All Products</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" onChange={(e) => setSortType(e.target.value)}>
          <option value="">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className={styles.grid}>
        {sortedProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
