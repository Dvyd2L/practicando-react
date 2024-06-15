import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";
const Navbar: React.FC<{ children: ReactNode }> & {
  Brand: React.FC<{ children: ReactNode }>;
  Toggle: React.FC<{ children?: ReactNode }>;
  Collapse: React.FC<{ children: ReactNode }>;
  Nav: React.FC<{ children: ReactNode }>;
  SearchBar: React.FC<{ children: ReactNode }>;
} = ({ children }) => <header>{children}</header>;
const Brand: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Link to="/">{children}</Link>
);
const Toggle: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <div className="navbar-toggle">{children}</div>
);
const Collapse: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="navbar-collapse">{children}</div>
);
const Nav: React.FC<{ children: ReactNode }> = ({ children }) => (
  <nav>{children}</nav>
);
const SearchBar: React.FC<{ children: ReactNode }> = ({ children }) => (
  <search>{children}</search>
);
Navbar.Brand = Brand;
Navbar.Toggle = Toggle;
Navbar.Collapse = Collapse;
Navbar.Nav = Nav;
Navbar.SearchBar = SearchBar;
export default Navbar;
