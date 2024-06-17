import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to={"/"}>Volver</Link>
    </div>
  );
};
export default NotFound;
