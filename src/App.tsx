import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import "./App.css";
import "antd/dist/reset.css"
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterLayout from './layout/register-layout/RegisterLayout';
import RegisterForm from './pages/register/RegisterForm';
import RegisterResult from './pages/register/RegisterResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RegisterLayout />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="register-result" element={<RegisterResult />} />
        </Route>
      
        <Route path="/home/:name" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;