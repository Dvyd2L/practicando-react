import { lazy } from "react";
import { RouteObject } from "react-router-dom";
export const authRoutes: RouteObject[] = [
  {
    path: "login",
    Component: lazy(() => import("@/auth/components/Login.tsx")),
  },
  {
    path: "sign-in",
    Component: lazy(() => import("@/auth/components/SignIn.tsx")),
  },
] as const;
