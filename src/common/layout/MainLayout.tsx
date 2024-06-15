import "./MainLayout.module.css";
// Components
import { Suspense } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import ErrorComponent from "@/common/components/Error";
import ErrorBoundary from "@/common/components/ErrorBoundary";
import Loading from "@/common/components/Loading";
import ProtectedRoute from "@/common/components/ProtectedRoute";
import Footer from "@/common/layout/Footer";
import Navbar from "@/common/layout/Navbar";
import { appRoutes } from "@/router/app.routes";
import styles from "./MainLayout.module.css";
const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <ProtectedRoute hasPermission={() => true} navigate={{ to: "/login" }}>
    <div className={styles.layout}>
      <Navbar>
        <Navbar.Brand>
          <h1>MyApp</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Nav>
            {appRoutes &&
              appRoutes.map(({ path }, index) => (
                <Link key={index} to={path ?? ""}>
                  {path}
                </Link>
              ))}
          </Navbar.Nav>
          {/* <Navbar.SearchBar /> */}
        </Navbar.Collapse>
      </Navbar>

      <main>
        <ErrorBoundary fallback={<ErrorComponent />}>
          <Suspense fallback={<Loading />}>
            <Routes>
              {appRoutes.map(({ path, Component, children }) => (
                <Route key={path} path={path} Component={Component}>
                  {children &&
                    children.map(
                      ({ path: childPath, Component: ChildComponent }) => (
                        <Route
                          key={childPath}
                          path={childPath}
                          Component={ChildComponent}
                        />
                      )
                    )}
                </Route>
              ))}
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        {children}
      </main>

      <Footer>
        <Footer.Copyright />
        <Footer.Address>
          <a href="mailto:info@example.com">info@example.com</a>
          <a href="callto:+34677100234">+34 677 10 02 34</a>
        </Footer.Address>
      </Footer>
    </div>
  </ProtectedRoute>
);
export default MainLayout;
