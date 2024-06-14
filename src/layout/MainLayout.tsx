import "./MainLayout.module.css";
// Components
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "@/components/ProtectedRoute";
import ErrorComponent from "@components/Error";
import ErrorBoundary from "@components/ErrorBoundary";
import Loading from "@components/Loading";
import Footer from "@layout/Footer";
import Navbar from "@layout/Navbar";
import { appRoutes } from "@router/app.routes";
interface MainLayoutProps {
  children?: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => (
  <ProtectedRoute hasPermission={() => true} navigate={{ to: "/login" }}>
    <div className="layout">
      <Navbar />

      <main>
        <ErrorBoundary fallback={<ErrorComponent />}>
          <Suspense fallback={<Loading />}>
            <Routes>
              {appRoutes &&
                appRoutes.map(({ path, Component }, index) => (
                  <Route key={index} path={path} element={<Component />} />
                ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>
        {children}
      </main>

      <Footer>
        <address>
          <a href="mailto:info@example.com">info@example.com</a>
        </address>
      </Footer>
    </div>
  </ProtectedRoute>
);
export default MainLayout;
