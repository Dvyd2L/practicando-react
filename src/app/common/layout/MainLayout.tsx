import ProtectedRoute from "@/app/common/components/ProtectedRoute";
import Footer from "@/app/common/layout/Footer";
import Navbar from "@/app/common/layout/Navbar";
import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ErrorBoundary from "../../core/components/ErrorBoundary";
import ErrorComponent from "../components/Error";
import Loading from "../components/Loading";
import { navLinks } from "../nav-links.routes";
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
              {navLinks.map(({ id, path }) => (
                <NavLink key={id} to={path ?? ""}>
                  {id}
                </NavLink>
              ))}
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
