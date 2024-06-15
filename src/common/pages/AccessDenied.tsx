import { Link } from "react-router-dom";
const AccessDenied = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <Link to={"/"}>Volver</Link>
    </div>
  );
};
export default AccessDenied;
