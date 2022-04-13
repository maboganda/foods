import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import adminsReducer from "./reducer";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const store = configureStore({
  reducer: { router: routerReducer, adminData: adminsReducer },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware).concat(logger),
});

export const history = createReduxHistory(store);
export default store;
