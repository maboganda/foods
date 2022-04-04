import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SignUp from "./pages/registrations/SignUp";
import SignIn from "./pages/sessions/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Dashboard/>}/>
      <Route exact path="/sign-in" element={<SignIn/>}/>
      <Route exact path="/sign-up" element={<SignUp/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
};

export default App;
