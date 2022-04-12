import React, { Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Loading from "./pages/loading/Loading";
import SignIn from "./pages/sessions/SignIn";
import SignOut from "./pages/sessions/SignOut";
import NotFound from "./pages/not_found/NotFound";
import Customers from "./pages/customers/Customers";
import Orders from "./pages/orders/Customers";
import SignUpLong from "./pages/registrations/SignUpLong";
import Cookies from "js-cookie";

const AuthWrapper = () => {
  return Cookies.get("auth_token") === null ? (
    <Navigate to="/sign-in" replace />
  ) : (
    <Outlet />
  );
};

const App = () => {
  return (
    <Suspense fallback={<Loading replace />}>
      <Routes>
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-out" element={<SignOut />} />
        <Route exact path="/sign-up" element={<SignUpLong />} />
        <Route element={<AuthWrapper />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/customers" element={<Customers />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/reports" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
