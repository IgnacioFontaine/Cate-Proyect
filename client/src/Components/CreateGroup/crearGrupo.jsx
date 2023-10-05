import { Box, Button, TextField, Typography } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {createGroup} from "../../Redux/actions"

const EMPTY_FORM = {
  name: "",
  meaning: "",
  release_date: "",
  manager: "",
  status: "",
  acronym:""
};

const CrearGrupo = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [button] = useState({
    value: "Create",
  });
  

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const validateErrors = validation(formData);
  //   setErrors(validateErrors);

  //   if (Object.keys(validateErrors).length === 0) {
  //     if (button.value === "Create") {
  //       dispatch(createGroup(formData));
  //     } else {
  //       dispatch(updateBGroup(formData.id, formData));
  //       setButton({ value: "Create" });
  //     }
  //     setFormData(EMPTY_FORM);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createGroup(formData));
    console.log(formData);
  }

  const disableSubmitButton = () => {
    if (
      formData.name.length > 0 &&
      formData.meaning.length > 0 &&
      formData.acronym.length > 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box >
          <Typography sx={{  fontSize: "2rem" }}>
           Nuevo Grupo 
          </Typography>
        </Box>
        <Box padding={1}>
          <TextField
                label="Nombre . . ."
                variant="outlined"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Significado"
                variant="outlined"
                name="meaning"
                autoComplete="off"
                value={formData.meaning}
                onChange={handleChange}
                fullWidth
                margin="normal"

              />

              <TextField
                label="Surgimiento"
                type="date"
                variant="outlined"
                name="release_date"
                autoComplete="off"
                value={formData.release_date}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              
              <TextField  
                label="Delegados"
                variant="outlined"
                name="manager"
                autoComplete="off"
                value={formData.manager}
                onChange={handleChange}
                fullWidth
                margin="normal"
                    />
              <TextField  
                label="Iniciales"
                variant="outlined"
                name="acronym"
                autoComplete="off"
                value={formData.acronym}
                onChange={handleChange}
                fullWidth
                margin="normal"
                    />
              <label>Estado:</label>
              <Select
              labelId="Estado"
            variant="outlined"
            name="status"
              id="status"
              value={formData.status}
            label="Estado"
            onChange={handleChange}
            fullWidth
  >
    <MenuItem value={"Cate"}>Cate</MenuItem>
    <MenuItem value={"Iniciate"}>Iniciate</MenuItem>
    <MenuItem value={"Familia"}>Familia</MenuItem>
  </Select>

        </Box>
        <Box>
          <Button
            type="submit" sx={{
            color: "black",
            bgcolor: "white",
            }}
            value={button.value}
            disabled={disableSubmitButton()}
          >{button.value}</Button>
        </Box>
      </form>
    </>
  );
};

export default CrearGrupo;
