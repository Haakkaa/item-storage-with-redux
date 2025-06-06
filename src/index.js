import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";

import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>
);
