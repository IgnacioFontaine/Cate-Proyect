import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  estaAutenticado: false,
})

export function AuthProvider({children}) {
  const [estaAutenticado, setEstaAutenticado] = useState(false)

  return (
    <AuthContext.Provider value={{estaAutenticado}}>{children}</AuthContext.Provider>
  ) 
}

export const useAuth = () => useContext(AuthContext);