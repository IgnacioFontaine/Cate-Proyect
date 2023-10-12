import { Box, TableHead, Typography } from "@mui/material";
import { useEffect } from "react";
import { getAllGroups  } from "../../Redux/actions"
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

  

  useEffect(() => {
    dispatch(getAllGroups());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const patrulleros = useSelector((state) => state?.all_patrulleros)
  console.log(patrulleros);
  
  const Groups = useSelector((state) => state?.all_groups)
  const Patrulleros = [{name:"test1", cuotas:"02/09"},{name:"test2", cuotas:"05/09"},{name:"test3", cuotas:"01/09"},{name:"test4", cuotas:"09/09"},{name:"test6", cuotas:"05/09"}, {name:"test7", cuotas:"00/09"}, {name:"test8", cuotas:"02/09"}, {name:"test9", cuotas:"05/09"},{name:"test10", cuotas:"05/09"},{name:"test11", cuotas:"05/09"}]
  
  return (
    <Box>
      <Box sx={{display:"flex", gap:3}}>
        <TableContainer
          sx={{ height: "35vh",width:"30vw", overflow: "auto", pb: 1, backgroundColor:"#242424", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:1}}
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={{ height: "35vh",width:"50vw",textAlign:"center", alignItems:"center" ,overflow: "auto", pb: 1, backgroundColor:"#242424", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:1}}
          style={{backgroundImage: 'none'}}
          component={Paper}>
          <Table>
            <TableHead sx={{height: "5vh", overflow: "auto", color:"black"}}>
            <Typography variant="h4">Grupo seleccionado:</Typography>
            <Typography variant="h6">Patrulleros</Typography>
          </TableHead>
          <TableBody style={{}}>
            {Patrulleros?.map((row) => (
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