import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar: React.FC<{ children: ReactNode }> & {
  Brand: React.FC<{ children: ReactNode }>;
  Toggle: React.FC<{ children?: ReactNode; toggleFn?: () => void }>;
  Collapse: React.FC<{ children: ReactNode; isOpen?: boolean }>;
  Nav: React.FC<{ children: ReactNode }>;
  SearchBar: React.FC<{ children?: ReactNode }>;
} = ({ children }) => <header className={styles["navbar-header"]}>{children}</header>;
const Brand: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Link to="/">{children}</Link>
);
const Toggle: React.FC<{ children?: ReactNode; toggleFn?: () => void }> = ({
  children,
  toggleFn,
}) => (
  <button type="button" className={styles["navbar-toggle"]} onClick={toggleFn}>
    {children ?? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    )}
  </button>
);
const Collapse: React.FC<{ children: ReactNode; isOpen?: boolean }> = ({
  children,
  isOpen,
}) => (
  <div className={`${styles["navbar-collapse"]} ${isOpen ? styles.open : ""}`}>
    {children}
  </div>
);
const Nav: React.FC<{ children: ReactNode }> = ({ children }) => (
  <nav className={styles["navbar-nav"]}>{children}</nav>
);
const SearchBar: React.FC<{ children?: ReactNode }> = ({ children }) => (
  <search>
    {children ?? (
      <form className={styles["input-group"]}>
        <input
          type="search"
          className={styles["input"]}
          id="buscar"
          name="buscar"
          placeholder="Buscar..."
          autoComplete="off"
        />
        <input className={styles["button--submit"]} value="Buscar" type="submit" />
      </form>
    )}
  </search>
);
Navbar.Brand = Brand;
Navbar.Toggle = Toggle;
Navbar.Collapse = Collapse;
Navbar.Nav = Nav;
Navbar.SearchBar = SearchBar;
export default Navbar;
