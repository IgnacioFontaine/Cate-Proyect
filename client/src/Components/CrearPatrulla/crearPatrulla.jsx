import { Box, Button, TableHead, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearPatrullero, getPatrulleros, eliminarPatrullero, modificarPatrullero  } from "../../Redux/actions"
import {
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const EMPTY_FORM = {
  name: "",
  cuotas: "",
  grupo:""
};

const CrearPatrullero = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [button, setButton] = useState({
    value: "Crear",
  });

  useEffect(() => {
    dispatch(getPatrulleros());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
    event.preventDefault();
 
      if (button.value === "Crear") {
        dispatch(crearPatrullero(formData));
      } else {
        dispatch(modificarPatrullero(formData.id, formData));
        setButton({ value: "Crear" });
      }
      setFormData(EMPTY_FORM);

  };

    const handleUpdate = (id, name, cuotas, grupo) => {
    setFormData({
      id: id,
      name: name,
      cuotas: cuotas,
      grupo:grupo
    });
    setButton({ value: "Modificar" });
  };

  const handleDelete = (id) => {
    dispatch(eliminarPatrullero(id));
    setFormData(EMPTY_FORM);
  };

  const disableSubmitButton = () => {
    if (
      formData.name.length > 0 &&
      formData.cuotas.length > 0 &&
      formData.grupo.length > 0
    ) {
      return false;
    }
    return true;
  };

  const Patrulleros = useSelector((state)=>state?.all_patrulleros)

  return (
    <>
      <Box sx={{display:"flex", gap:"5px"}}>
        <Box>
        <form onSubmit={handleSubmit}>
        <Box >
          <Typography sx={{  fontSize: "2rem" }}>
           Nuevo Patrullero 
          </Typography>
        </Box>
        <Box padding={1}>
          <TextField
                label="Nombre completo . . ."
                variant="outlined"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              <TextField
                label="Cuotas"
                variant="outlined"
                name="cuotas"
                autoComplete="off"
                value={formData.cuotas}
                onChange={handleChange}
                fullWidth
                margin="normal"

              />

              <TextField
                label="Grupo"
                variant="outlined"
                name="grupo"
                autoComplete="off"
                value={formData.grupo}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

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
      </Box>
      <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1, backgroundColor:"#242424", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:1}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "5vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Patrulleros:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {Patrulleros?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.grupo}</Box>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ cursor: "pointer" }}>
                        <Icon>
                          <DeleteForeverRoundedIcon
                            onClick={() => handleDelete(row?.id)}
                          ></DeleteForeverRoundedIcon>
                        </Icon>
                      </Box>
                      <Box>
                        <Icon sx={{cursor:'pointer'}}>
                          <EditRoundedIcon
                            onClick={() => 
                              handleUpdate(
                                row?.id,
                                row?.name,
                                row?.cuotas,
                                row?.grupo
                              )
                            }
                          ></EditRoundedIcon>
                        </Icon>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
    </>
  );
};

export default CrearPatrullero;
