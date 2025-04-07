import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    showNotification("successfully added to cart");
  };

  const increaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, removeAll = false) => {
    if (removeAll) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      decreaseQuantity(id);
    }
  };

  const checkout = () => {
    if (cart.length === 0) {
      showNotification("empty cart !");
      return false; // tidak berhasil checkout
    }

    showNotification("Checkout succeed 🎉");
    setCart([]);
    return true; // berhasil
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        checkout,
        notification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
