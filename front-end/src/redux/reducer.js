import { createReducer } from "@reduxjs/toolkit";
import { registration_obj } from "../components/Utils/utils";
import * as action from "./action";

const initialState = {
  isLoggedIn: false,
  token: null,
  errorStatusCode: null,
  registrations: registration_obj,
  collection: {},
};

const adminsReducer = createReducer(initialState, {
  [action.HTTP_REQUEST_ERROR]: (state, actionx) => {
    state.errorStatusCode = actionx.payload;
    return state;
  },
  [action.CREATE_SESSION]: (state, actionx) => {
    state.isLoggedIn = true;
    state.token = actionx.payload;
    state.errorStatusCode = null;
    return state;
  },
  [action.DESTROY_SESSION]: (state) => {
    state.isLoggedIn = false;
    state.token = null;
    state.errorStatusCode = null;
    return state;
  },
  [action.FETCH_CUSTOMERS]: (state, action) => {
    state.errorStatusCode = null;
    state.collection = action.payload;
    return state;
  },
  [action.GET_DASHBOARD_DATA]: (state) => {
    return state;
  },
});

export default adminsReducer;
