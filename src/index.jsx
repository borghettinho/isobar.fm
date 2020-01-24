import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import theme from "./components/theme";

import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import "sanitize.css/typography.css";
import "sanitize.css/forms.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
