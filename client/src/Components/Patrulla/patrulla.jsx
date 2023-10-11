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

const Patrulla = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getAllGroups());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  
  const Groups = useSelector((state)=>state?.all_groups)
  
  return (
    <Box>
      <Box>
        <TableContainer
          sx={{ height: "35vh",width:"28vw", overflow: "auto", pb: 1, backgroundColor:"#242424", color:"rgba(255, 255, 255, 0.87)", colorScheme:"light dark", boxShadow:1}}
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
      </Box>

    </Box>
  )
}
export default Patrulla;