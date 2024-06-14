import ProtectedRoute from "@/components/ProtectedRoute";

const Admin = () => (
  <ProtectedRoute
    hasPermission={() => false}
    navigate={{ to: "/access-denied" }}
  >
    <h1>Administración</h1>
  </ProtectedRoute>
);
export default Admin;
