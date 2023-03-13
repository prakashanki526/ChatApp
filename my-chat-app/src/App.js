import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from './pages/signup/SignupPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VerifyOTP from "./pages/verifyOtp/VerifyOTP";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import {AuthorizeUser} from './components/middleware/auth';
import UserDataState from "./components/context/UserDataState";

function App() {
  return (
    <div>
      <UserDataState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthorizeUser> <Home /> </AuthorizeUser>}></Route>
            <Route path="/chat/:partnerName" element={<AuthorizeUser> <Home /> </AuthorizeUser>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/verifyOTP" element={<VerifyOTP />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          </Routes>
        </BrowserRouter>
      </UserDataState>
    </div>
  );
}

export default App;
