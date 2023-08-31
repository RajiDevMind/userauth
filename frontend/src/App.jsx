import RegPage from "./pages/RegPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3032";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/auth/register" element={<RegPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
