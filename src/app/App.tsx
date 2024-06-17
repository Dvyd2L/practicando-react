/* import ErrorComponent from "@/common/components/Error";
import ErrorBoundary from "@/common/components/ErrorBoundary";
import Loading from "@/common/components/Loading";
import MainLayout from "@/common/layout/MainLayout.tsx";
import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"; */
import "./App.module.css";
import { AppRouter } from "./router/router";
const App = () => (<AppRouter/>
 /*  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/auth/*"
            Component={lazy(() => import("@/auth/pages/Auth.tsx"))}
          />
          <Route
            path="/access-denied"
            Component={lazy(() => import("@/common/pages/AccessDenied.tsx"))}
          />
          <Route
            path="/404"
            Component={lazy(() => import("@/common/pages/NotFound.tsx"))}
          />
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter> */
);
export default App;
