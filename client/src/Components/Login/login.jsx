import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

const EMPTY_FORM = {
  email: "",
  contraseña:""
};

const CreateAccount = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleSubmit = (event) => {
    event.preventDefaul()
  }

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  return (
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column", m:2}}>
        <Typography variant="h2" >¡Bienvenido Comando!</Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection:"column"}}>
        <form onSubmit={handleSubmit}>
        <Box >
          <Typography sx={{  fontSize: "2rem" }}>
           Nuevo Grupo 
          </Typography>
        </Box>
        <Box padding={1}>
          <TextField
                label="Email . . ."
                variant="outlined"
                name="name"
                autoComplete= "none"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Contraseña"
                type="password"
                variant="outlined"
                name="meaning"
                autoComplete="off"
                value={formData.meaning}
                onChange={handleChange}
                fullWidth
                margin="normal"

              />

              
        </Box>
        <Box>
          <Button
            type="submit"
            sx={{
            color: "black",
            bgcolor: "white",
            }}
          >Ingresar</Button>
        </Box>
      </form>
      </Box>
    </Box>
  );
};

export default CreateAccount;
