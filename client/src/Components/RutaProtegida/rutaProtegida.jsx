import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/authProvider";

export default function ProtejerRuta() {
  const auth = useAuth()

  return auth.estaAutenticado ? <Outlet /> : <Navigate to="/" />
}