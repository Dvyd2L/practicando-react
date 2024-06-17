import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// components
import ErrorComponent from "@/app/common/components/Error.tsx";
import ErrorBoundary from "@/app/common/components/ErrorBoundary.ts";
import Loading from "@/app/common/components/Loading.tsx";

const MainLayout = lazy(() => import("@/app/common/layout/MainLayout.tsx"));
const AccessDenied = lazy(() => import("@/app/common/pages/AccessDenied.tsx"));
const NotFound = lazy(() => import("@/app/common/pages/NotFound.tsx"));
const HomePage = lazy(() => import("@/app/home/pages/HomePage.tsx"));
const AuthLayout = lazy(() => import("@/app/auth/layout/AuthLayout.tsx"));
const Login = lazy(() => import("@/app/auth/pages/Login.tsx"));
const Register = lazy(() => import("@/app/auth/pages/Register.tsx"));
const UsersPage = lazy(() => import("@/app/users/pages/UsersPage.tsx"));
const Posts = lazy(() => import("@/app/posts/pages/Posts.tsx"));
const PostDetail = lazy(() => import("@/app/posts/pages/PostDetail.tsx"));
const AdminPage = lazy(() => import("@/app/admin/AdminPage.tsx"));

export const AppRouter = () => (
  <BrowserRouter>
    <ErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/inicio" element={<HomePage />} />

          {/* Rutas publicas (login/register) */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="" element={<Navigate to="login" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Rutas protegidas (sesion iniciada) */}
          <Route element={<MainLayout />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/posts" element={<Posts />}>
              <Route path=":postId" element={<PostDetail />} />
            </Route>
            {/* Ruta protegida (rol: admin) */}
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* redirecciones */}
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
