import React from "react";
import Page404 from "../../pages/page_errors/Page404";
import SignIn from "../../pages/sessions/SignIn";
import { useSelector } from "react-redux";

const ErrorHandler = ({ children }) => {
  const { errorStatusCode } = useSelector((state) => state.adminData);

  switch (errorStatusCode) {
    case 401:
      return <SignIn />;
    case 404:
      return <Page404 />;
    default:
      return children;
  }
};

export default ErrorHandler;
