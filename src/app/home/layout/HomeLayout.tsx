import { Outlet } from "react-router-dom";
import styles from "./HomeLayout.module.css";
const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <main className={styles.layout}>{children ?? <Outlet />}</main>
);
export default HomeLayout;
