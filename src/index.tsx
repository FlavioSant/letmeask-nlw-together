import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";

import "./services/firebase";

import "react-toastify/dist/ReactToastify.css";

import { GlobalStyles } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
