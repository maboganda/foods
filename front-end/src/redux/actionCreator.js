import * as action from "./action";
import axios from "axios";
import { push } from "redux-first-history";

// install npm i cors #to enable cors
axios.defaults.headers.post["Content-Type"] = "application/json;";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.withCredentials = true;

export const createSession = (params) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/tokens/authenticate`, params)
      .then((resp) => {
        const token = resp.data.auth_token;
        dispatch(action.CREATE_SESSION(token));
        dispatch(push("/"));
      })
      .catch((error) => {
        dispatch(action.HTTP_REQUEST_ERROR(error.toJSON().status));
      });
  };
};

export const destroySession = () => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/tokens/sign_out`)
      .then((resp) => {
        dispatch(action.DESTROY_SESSION);
        dispatch(push("/sign-in"));
      })
      .catch((error) => {
        dispatch(action.HTTP_REQUEST_ERROR(error.toJSON().status));
      });
  };
};

export const getDashboardData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/dashboard`)
      .then((resp) => {
        console.log("SUCCESS ENTRY");
      })
      .catch((error) => {
        dispatch(action.HTTP_REQUEST_ERROR(error.toJSON().status));
      });
  };
};
