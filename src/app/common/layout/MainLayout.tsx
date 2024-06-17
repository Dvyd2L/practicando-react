import ProtectedRoute from "@/app/common/components/ProtectedRoute";
import Footer from "@/app/common/layout/Footer";
import Navbar from "@/app/common/layout/Navbar";
import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ErrorComponent from "../components/Error";
import ErrorBoundary from "../components/ErrorBoundary";
import Loading from "../components/Loading";
import "./MainLayout.module.css";
import styles from "./MainLayout.module.css";
const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);
  return (
    <ProtectedRoute
      hasPermission={() => Boolean(localStorage.getItem("user"))}
      navigate={{ to: "/auth" }}
    >
      <div className={styles.layout}>
        <Navbar>
          <Navbar.Brand>
            <h1>MyApp</h1>
          </Navbar.Brand>
          <Navbar.Toggle toggleFn={toggleCollapse} />
          <Navbar.Collapse isOpen={isOpen}>
            <Navbar.Nav>
              <NavLink to="users">Usuarios</NavLink>
              <NavLink to="posts">Posts</NavLink>
              <NavLink to="admin">Administración</NavLink>
              {/* {appRoutes &&
                appRoutes.map(({ path }, index) => (
                  <NavLink key={index} to={path ?? ""}>
                    {path}
                  </NavLink>
                ))} */}
            </Navbar.Nav>
            <Navbar.SearchBar />
          </Navbar.Collapse>
        </Navbar>

        <main>
          <ErrorBoundary fallback={<ErrorComponent />}>
            <Suspense fallback={<Loading />}>{children ?? <Outlet />}</Suspense>
          </ErrorBoundary>
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
};
export default MainLayout;