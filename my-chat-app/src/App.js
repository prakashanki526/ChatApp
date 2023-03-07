import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from './pages/signup/SignupPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
