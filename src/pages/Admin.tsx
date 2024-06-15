import ProtectedRoute from "@/common/components/ProtectedRoute";
import { Link } from "react-router-dom";

const Admin = () => (
  <ProtectedRoute
    hasPermission={() => false}
    navigate={{ to: "/access-denied" }}
  >
    <>
      <h1>Administración</h1>
      <Link to={"../"}>Volver</Link>
    </>
  </ProtectedRoute>
);
export default Admin;
