import { Routes, Route } from "react-router-dom";
import Customers from "./pages/customers/Customers";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Customers";
import SignUp from "./pages/registrations/SignUp";
import SignUpLong from "./pages/registrations/SignUpLong";
import SignIn from "./pages/sessions/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Dashboard/>}/>
      <Route exact path="/sign-in" element={<SignIn/>}/>
      <Route exact path="/sign-up" element={<SignUpLong/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/customers" element={<Customers/>}/>
      <Route exact path="/orders" element={<Orders/>}/>
      <Route exact path="/reports" element={<Dashboard/>}/>
    </Routes>
  )
};

export default App;
