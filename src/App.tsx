import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ConfigProvider } from "antd";

import "./App.css";
import "antd/dist/reset.css"
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterLayout from './layout/register-layout/RegisterLayout';
import RegisterForm from './pages/register/RegisterForm';
import RegisterResult from './pages/register/RegisterResult';

function App() {
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#019c50',
       
      },
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterLayout />}>
            <Route index element={<RegisterForm />} />
            <Route path="result" element={<RegisterResult />} />
          </Route>
        
          <Route path="/home/:name" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;