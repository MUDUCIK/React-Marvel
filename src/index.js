import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/css/bootstrap-reboot.min.css";
import "./styles/css/fonts.css";
import { GlobalStyles } from "./styles/styled-components/GlobalStyles";

render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("marvel")
);
