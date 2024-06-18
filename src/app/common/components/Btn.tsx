import { ButtonHTMLAttributes } from "react";
import styles from "./Btn.module.css";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Btn: React.FC<BtnProps> = ({ children, ...rest }) => (
  <button {...rest} className={styles["base-btn"]}>
    {children}
  </button>
);

export default Btn;
