import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css"; // jika kamu punya global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
