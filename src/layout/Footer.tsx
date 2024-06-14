import "./Footer.module.css";
interface FooterProps {
  children?: React.ReactNode;
}
const Footer = ({ children }: FooterProps) => (
  <footer>
    <span>&copy; Todos los derechos reservados. También los izquierdos.</span>
    {children}
  </footer>
);
export default Footer;
