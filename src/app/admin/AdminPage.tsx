import ProtectedRoute from "@/app/common/components/ProtectedRoute";
import { Link } from "react-router-dom";

const AdminPage = () => (
  <ProtectedRoute
    hasPermission={() => {
      const user = JSON.parse(localStorage.getItem("user") ?? "");
      return user["role"] === "admin";
    }}
    navigate={{ to: "/access-denied" }}
  >
    <>
      <h1>Administración</h1>
      <Link to={"../"}>Volver</Link>
    </>
  </ProtectedRoute>
);
export default AdminPage;
