import Footer from "@/app/common/layout/Footer";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";
const AuthLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main>
        {children ?? <Outlet />}
      </main>
      <Footer>
        <Footer.Copyright />
      </Footer>
    </div>
  );
};
export default AuthLayout;
