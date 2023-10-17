import {Box,Typography, TextField, Button } from "@mui/material"
import { useState } from "react";
import { useAuth } from "../../auth/authProvider";
import { Navigate } from "react-router-dom";

const EMPTY_FORM = {
  email: "",
  contraseña:""
};

const Login = () => {
  const auth = useAuth()
  const [formData, setFormData] = useState(EMPTY_FORM);
  // const [errorResponse, setErrorResponse] = useState("");

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  async function handleSubmit(event) {
    event.preventDefault();
    // auth.setEstaAutenticado(true);

    // try {
    //   const response = await fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     const json = (await response.json());
    //     console.log(json);

    //     if (json.body.accessToken && json.body.refreshToken) {
    //       auth.saveUser(json);
    //     }
    //   } else {
    //     const json = (await response.json());

    //     setErrorResponse(json.body.error);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }
  if (auth.estaAutenticado) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column", m:2}}>
        <Typography variant="h2" >¡Bienvenido Comando!</Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection:"column"}}>
        <form onSubmit={handleSubmit}>
        <Box >
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

export default Login;
