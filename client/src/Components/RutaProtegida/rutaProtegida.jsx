import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtejerRuta() {
  const [estaAutenticado, setEstaAutenticado] = useState(false)

  return estaAutenticado ? <Outlet /> : <Navigate to="/" />
}