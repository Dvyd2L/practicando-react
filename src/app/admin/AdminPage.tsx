import ProtectedRoute from "@/app/common/components/ProtectedRoute";
import { Link } from "react-router-dom";

const AdminPage = () => (
  <ProtectedRoute
    hasPermission={() => true}
    navigate={{ to: "/access-denied" }}
  >
    <>
      <h1>Administración</h1>
      <Link to={"../"}>Volver</Link>
    </>
  </ProtectedRoute>
);
export default AdminPage;
