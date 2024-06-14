import { appRoutes } from "@router/app.routes.tsx";
import { Link } from "react-router-dom";
import "./Navbar.module.css";
interface NavbarProps {
  children?: React.ReactNode;
}
const Navbar = ({ children }: NavbarProps) => (
  <header>
    <Link to="/">
      <h1>My App</h1>
    </Link>
    
    <nav>
      {appRoutes &&
        appRoutes.map(({ path, name }, index) => (
          <Link key={index} to={path}>
            {name}
          </Link>
        ))}
    </nav>

    {children}
  </header>
);
export default Navbar;
