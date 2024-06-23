import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      \
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}></Route>
        <Route
          path='/login'
          element={<LoginPage />}></Route>
        <Route
          path='/dashboard'
          element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
