import {Box,Typography } from "@mui/material"
import Menu from "../Menu/menu";

const NavBar = () => {
  return (
    <Box display={"flex"}>
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h1">Grupo Juvenil La Catedral</Typography>
      <Typography variant="h4">Gracias por invitarnos a ser Libres, Felices y Santos</Typography>
    </Box>
      <Box sx={{display:"flex", height:2, textAlign:"center"}}>
        <Menu />
    </Box>
  </Box> 
  )
}

export default NavBar;