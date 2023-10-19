import { Box, Button, TableHead, TextField, Typography } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGroup, getAllGroups, deleteGroup, updateGroup  } from "../../Redux/actions"
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
  meaning: "",
  release_date: "",
  manager: "",
  status: "",
  acronym:""
};

const CrearGrupo = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [button, setButton] = useState({
    value: "Crear",
  });

  useEffect(() => {
    dispatch(getAllGroups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  

  const handleChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  const handleSubmit = (event) => {
    event.preventDefault();
 
      if (button.value === "Crear") {
        dispatch(createGroup(formData));
      } else {
        dispatch(updateGroup(formData.id, formData));
        setButton({ value: "Crear" });
      }
      setFormData(EMPTY_FORM);

  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(createGroup(formData));
  //   console.log(formData);
  // }

    const handleUpdate = (id, name, meaning, release_date, manager, status, acronym) => {
    setFormData({
      id: id,
      name: name,
      meaning: meaning,
      release_date: release_date,
      manager: manager,
      status: status,
      acronym:acronym
    });
    setButton({ value: "Modificar" });
  };

  const handleDelete = (id) => {
    dispatch(deleteGroup(id));
    setFormData(EMPTY_FORM);
  };

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

  const Groups = useSelector((state)=>state?.all_groups)

  return (
    <>
      <Box sx={{display:"flex", gap:"5px"}}>
        <Box>
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
      </Box>
      <Box>
        <TableContainer
          sx={{ height: "60vh",width:"28vw", overflow: "auto", pb: 1, backgroundColor:"transparent", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", mt:5}}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
            <Table >
              <TableHead sx={{height: "5vh", overflow: "auto", color:"black"}}>
                <Typography variant="h4" >Grupos:</Typography>
              </TableHead>
            <TableBody style={{}}>
              {Groups?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
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
                                row?.meaning,
                                row?.release_date,
                                row?.manager,
                                row?.status,
                                row?.acronym
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

export default CrearGrupo;
