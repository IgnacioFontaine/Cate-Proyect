import { Box, TableHead, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllGroups, getPatrulleros  } from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const Patrulla = () => {
  const dispatch = useDispatch()
  const [seleccionado, setSeleccionado] = useState({
    nombre_grupo: "No seleccionado"
  });

  useEffect(() => {
    dispatch(getAllGroups());
    dispatch(getPatrulleros());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const patrulleros = useSelector((state) => state?.all_patrulleros)
  
  const Groups = useSelector((state) => state?.all_groups)

  const handleSelect = (nombre) => {
    setSeleccionado({
      nombre_grupo: nombre,
    })
  }

  const seleccionados_patrulleros = patrulleros?.filter((patrullero) => patrullero.grupo === seleccionado.nombre_grupo)
  
  return (
    <Box>
      <Box sx={{display:"flex", gap:3}}>
        <TableContainer
          sx={{ height: "35vh",width:"30vw", overflow: "auto", pb: 1, backgroundColor:"transparent", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
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
                    <Box sx={{cursor:"pointer"}} onClick={() => handleSelect(row.name, row.id)}>{row?.name}</Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={{ height: "35vh",width:"50vw",textAlign:"center", alignItems:"center" ,overflow: "auto", pb: 1, backgroundColor:"transparent", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark"}}
          style={{backgroundImage: 'none'}}
          component={Paper}>
          <Table>
            <TableHead sx={{ height: "5vh", overflow: "auto", color: "black" }}>
              <TableRow>
                <Typography variant="h4">Grupo:{seleccionado?.nombre_grupo}</Typography>
                <Typography variant="h6">Patrulleros</Typography>
              </TableRow>
          </TableHead>
          <TableBody style={{}}>
            {seleccionados_patrulleros.map((row) => (
                <TableRow key={row?.id}>
                  <TableCell
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                  <Box>{row?.name}</Box>
                  <Box>{row?.cuotas}</Box>
                  <EditRoundedIcon />
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}
export default Patrulla;