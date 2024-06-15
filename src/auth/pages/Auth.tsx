import { authRoutes } from "@/auth/router/auth.routes.tsx";
import Footer from "@/common/layout/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Auth.module.css";
const Auth = () => {
  return (
    <div className={styles.layout}>
      <main>
        <Routes>
          <Route path="" element={<Navigate to="login" />} />
          {authRoutes.map(({ path, Component }, key) => (
            <Route key={key} path={path} Component={Component} />
          ))}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <Footer>
        <Footer.Copyright />
      </Footer>
    </div>
  );
};
export default Auth;
