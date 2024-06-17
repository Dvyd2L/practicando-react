import { Outlet } from "react-router-dom";

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <main>{children ?? <Outlet />}</main>
);
export default HomeLayout;
