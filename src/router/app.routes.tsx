import { lazy } from "react";
import { RouteObject } from "react-router-dom";
export const appRoutes: RouteObject[] = [
  {
    path: "inicio",
    Component: lazy(() => import("@/pages/Home.tsx")),
  },
  {
    path: "posts",
    
    Component: lazy(() => import("@/posts/pages/Posts")),
    children: [
      {
        path: ":postId",
        Component: lazy(() => import("@/posts/pages/PostDetail")),
      },
    ],
  },
  {
    path: "admin",
    Component: lazy(() => import("@/pages/Admin.tsx")),
  }
] as const;
