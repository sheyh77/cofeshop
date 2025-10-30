import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("admin_token");
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}