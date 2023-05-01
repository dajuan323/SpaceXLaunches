import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./services/serviceHelper";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "toastr/build/toastr.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import debug from "sabio-debug";
const _logger = debug.extend("root");

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals(_logger);
