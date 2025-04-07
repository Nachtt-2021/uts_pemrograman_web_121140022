import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { CartProvider, CartContext } from "./context/context";
import Notification from "./components/Notification";
import "./styles/styles.css";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const AppContent = ({ handleLogout }) => {
  const location = useLocation();
  const { notification } = useContext(CartContext);

  return (
    <>
      {notification && <Notification message={notification} />}
      <Navbar onLogout={handleLogout} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
          className="page"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

function App() {
  const handleLogout = () => {
    // optional: tampilkan notifikasi logout
  };

  return (
    <CartProvider>
      <Router>
        <AppContent handleLogout={handleLogout} />
      </Router>
    </CartProvider>
  );
}

export default App;
