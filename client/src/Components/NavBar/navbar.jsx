import {Box,Typography, Avatar } from "@mui/material"
import Menu from "../Menu/menu";
import LogoCate from '../../assets/logoCateBlanco.ico'
const NavBar = () => {
  return (
    <Box display={"flex"} sx={{ width: "75vw", justifyContent:"center", alignItems:"center", gap:5, mb:2, mt:0 }} >
      <Box>
              <Avatar
          alt="LaCate"
          src={LogoCate}
          sx={{ width: 70, height: 70 }}
/>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
      <Typography variant="h2">Grupo Juvenil La Catedral</Typography>
      <Typography variant="h5">Gracias por invitarnos a ser Libres, Felices y Santos</Typography>
    </Box>
      <Box sx={{display:"flex", height:2, textAlign:"center", alignContent:"end"}}>
        <Menu />
    </Box>
  </Box> 
  )
}

export default NavBar;