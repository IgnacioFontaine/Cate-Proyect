import { Box, Button, TextField, Typography } from "@mui/material";
import {
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { useState } from "react";

import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const EMPTY_FORM = {
  name: "",
  meaning: "",
  release_date: "",
  manager: "",
  principal_img: "",
  all_img : "",
  status:""
};

const CreateGroup = () => {
  // const dispatch = useDispatch();
  // const Groups = useSelector((state) => state?.groups);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [searchQuery, setSearchQuery] = useState("");
  const [errors] = useState({});
  const [button, setButton] = useState({
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
  }

  // const handleDelete = (id) => {
  //   dispatch(deleteGroup(id));
  //   setFormData(EMPTY_FORM);
  // };

  const handleDelete = (event) => {
    event.preventDefault();
  };

  const handleUpdate = (id, name, meaning, release_date, manager,all_img, principal_img, status) => {
    setFormData({
      id: id,
      name: name,
      meaning: meaning,
      release_date: release_date,
      manager: manager,
      principal_img: principal_img,
      all_img : all_img,
      status:status
    });
    setButton({ value: "Modify" });
  };

  const disableSubmitButton = () => {
    if (
      formData.name.length > 0 &&
      formData.meaning.length > 0 &&
      formData.meaning.length > 0
    ) {
      return false;
    }
    return true;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const groups = {id:"1", name:"group1",meaning:"group1meaning",release_date:"01-01-2001", manager:"Manager1&manager2",principal_img:"image1", all_img:"2,3,4", status:"cate" }

  const filteredGroups = groups
    ? groups.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  

  // const theme = createTheme({
  //   palette: {
  //     mode:   'light',
  //     customGreen: {
  //       main: "#09e6a7",
  //     },
  //   },
  // });

  return (
    <>
      <Box sx={{ maxHeight: "84vh", overflow: "auto", mb: 2, boxShadow: 3 }}>
        <Box display="flex" >
      <Box >
        <form onSubmit={handleSubmit}>
          <Box >
            <Box>
              <Typography sx={{  fontSize: "1.3rem" }}>
                Nuevo Grupo 
              </Typography>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                label="Nombre . . ."
                variant="outlined"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                helperText={errors.name && errors.name}
                error={Boolean(errors.name)}
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
                helperText={errors.meaning && errors.meaning}
                error={Boolean(errors.meaning)}
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
                helperText={errors.release_date && errors.release_date}
                error={Boolean(errors.release_date)}
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
                label="Imagen principal"
                variant="outlined"
                name="principal_img"
                autoComplete="off"
                value={formData.principal_img}
                onChange={handleChange}
                fullWidth
                margin="normal"
                    />
                    
              <TextField  
                label="Imagenes..."
                variant="outlined"
                name="all_img"
                autoComplete="off"
                value={formData.all_img}
                onChange={handleChange}
                fullWidth
                margin="normal"
                    />
              <TextField  
                label="Estado"
                variant="outlined"
                name="status"
                autoComplete="off"
                value={formData.status}
                onChange={handleChange}
                fullWidth
                margin="normal"
                    />
                    
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                
                color="customGreen"
                sx={{
                  color: "white",
                  bgcolor: "#30EAB5",
                }}
                value={button.value}
                disabled={disableSubmitButton()}
              >
                {button.value}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      <Box  >
        <Typography
          sx={{
            color:  "whiteSmoke",
            textAlign: "center",
            fontSize: "1.3rem",
            mt: 1.3,
            pb: 1,
          }}
        >
          {"All Business"}
        </Typography>

        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />

        <TableContainer
          sx={{ height: "50vh", overflow: "auto", pb: 1, backgroundColor: "whiteSmoke" }}
          style={{backgroundImage: 'none'}}
          component={Paper}
        >
          <Table >
            <TableBody style={{}}>
              {filteredGroups?.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>{row?.name}</Box>
                    <Box>{row?.meaning}</Box>
                    <Box>{row?.release_date}</Box>
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
                                row?.principal_img,
                                row?.all_img,
                                row?.status
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
      </Box>
    </>
  );
};

export default CreateGroup;
