import MainLayout from "@layout/MainLayout.tsx";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<MainLayout />} />
      <Route path="/login" Component={lazy(() => import("@pages/Login.tsx"))} />
      <Route path="/access-denied" element={<h1>Acceso Denegado</h1>} />
    </Routes>
  </BrowserRouter>
);
export default App;
