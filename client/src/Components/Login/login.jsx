import {Box,Typography, TextField } from "@mui/material"

const CreateAccount = () => {
  return (
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column", boxShadow:4}}>
        <Typography variant="h2" >¡Bienvenido Comando!</Typography>
        {/* <Typography>Crea tu cuenta en el Grupo Juvenil La Catedral</Typography> */}
      </Box>
      <Box sx={{display: "flex", flexDirection:"column"}}>
        <form onSubmit={null}>
          <Box sx={{display: "flex", flexDirection:"column"}}>
            <TextField
              type="text"
              variant="outlined"
              placeholder="Nombre completo..."
              name="name"
              // value={}
              autoComplete="off" />
          
            <TextField
              type="email"
              variant="outlined"
              placeholder="Email..."
              name="email"
              // value={}
              autoComplete="off" />
          
            <TextField
              type="password"
              variant="outlined"
              placeholder="Contraseña..."
              name="password"
              // value={}
              autoComplete="off" />
          </Box>
          <Box>
            <button type="submit">Ingresar</button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateAccount;
