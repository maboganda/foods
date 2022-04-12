import React from "react";
import ReactDOM from "react-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import store, { history } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

import "./index.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </Router>
  </Provider>,
  root
);
