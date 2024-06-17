import { Navigate, NavigateProps, Outlet } from "react-router-dom";
interface PermissionObject {
  fn: (...args: unknown[]) => boolean;
  args: unknown[];
}
interface ProtectedRouteProps {
  children?: JSX.Element;
  hasPermission: (() => boolean) | PermissionObject;
  navigate: NavigateProps;
}
const isPermissionObject = (
  permission: (() => boolean) | PermissionObject
): permission is PermissionObject => {
  if (typeof permission === "function") return false;
  return (
    permission &&
    typeof permission.fn === "function" &&
    Array.isArray(permission.args)
  );
};
const ProtectedRoute = ({
  children,
  hasPermission,
  navigate,
}: ProtectedRouteProps) => {
  const isAllowed = isPermissionObject(hasPermission)
    ? hasPermission.fn(...hasPermission.args)
    : hasPermission();
  return isAllowed ? children ?? <Outlet /> : <Navigate {...navigate} />;
};
export default ProtectedRoute;
