import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import { WishlistProvider } from "./js/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </React.StrictMode>
);
