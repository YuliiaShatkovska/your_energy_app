import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import { App } from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "styles/GlobalStyles.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/your_energy_app">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
