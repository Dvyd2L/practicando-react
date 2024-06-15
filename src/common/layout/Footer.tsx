import "./Footer.module.css";
const Footer: React.FC<{ children?: React.ReactNode }> & {
  Copyright: React.FC<{ children?: React.ReactNode }>;
  Address: React.FC<{ children?: React.ReactNode }>;
} = ({ children }) => <footer>{children}</footer>;
const Copyright: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <>
    {children ? (
      children
    ) : (
      <span>
        &copy; {new Date().getFullYear()} Todos los derechos reservados. También
        los izquierdos.
      </span>
    )}
  </>
);
const Address: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <address>{children}</address>
);
Footer.Copyright = Copyright;
Footer.Address = Address;
export default Footer;
