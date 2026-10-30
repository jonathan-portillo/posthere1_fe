import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

const store = configureStore({
  reducer,
  // action payloads include raw Error objects, which aren't serializable
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
