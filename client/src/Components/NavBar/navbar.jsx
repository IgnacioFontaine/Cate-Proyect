import {Box,Typography } from "@mui/material"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box display={"flex"}>
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="h1">Grupo Juvenil La Catedral</Typography>
      <Typography variant="h4">Gracias por invitarnos a ser Libres, Felices y Santos</Typography>
    </Box>
    <Box>
      <Link to="/"><Typography variant="h6">Apostolate</Typography></Link>
      <Link to="/familia"><Typography variant="h6">Egresados</Typography></Link>
      <Link to="/oración"><Typography variant="h6">Oración</Typography></Link>
      <Link to="/creargrupo"><Typography variant="h6">Nuevo Grupo</Typography></Link>
    </Box>
  </Box> 
  )
}

export default NavBar;