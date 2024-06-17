import { lazy } from "react";
import { RouteObject } from "react-router-dom";
export const appRoutes: RouteObject[] = [
  {
    path: "usuarios",
    Component: lazy(() => import("@/app/users/pages/UsersPage")),
  },
  {
    path: "posts",
    
    Component: lazy(() => import("@/app/posts/pages/Posts")),
    children: [
      {
        path: ":postId",
        Component: lazy(() => import("@/app/posts/pages/PostDetail")),
      },
    ],
  },
  {
    path: "admin",
    Component: lazy(() => import("@/app/admin/AdminPage")),
  }
] as const;
