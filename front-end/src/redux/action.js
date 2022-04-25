import { createAction } from "@reduxjs/toolkit";

export const HTTP_REQUEST_ERROR = createAction("httpRequestError");
export const CREATE_SESSION = createAction("createSession");
export const DESTROY_SESSION = createAction("destroySession");
export const GET_DASHBOARD_DATA = createAction("getDashboardData");
export const FETCH_CUSTOMERS = createAction("fetchCustomers");