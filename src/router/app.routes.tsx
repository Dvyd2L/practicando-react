import { lazy } from "react";

export const appRoutes = [
  {
    path: "/",
    name: "Home",
    Component: lazy(() => import("@pages/Home.tsx")),
  },
  {
    path: "/posts",
    name: "Posts",
    Component: () => (<h1>Posts</h1>),
  },
  {
    path: "/contacto",
    name: "Contacto",
    Component: () => <h1>Contacto</h1>,
  },
  {
    path: "/admin",
    name: "Administración",
    Component: lazy(() => import("@pages/Admin.tsx")),
  },
] as const