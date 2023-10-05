import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {  useDispatch} from "react-redux";
// import Cards from "../Cards/cards"
import { getAllGroups, searchCateGroups } from "../../Redux/actions";

const Cate = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllGroups());
    dispatch(searchCateGroups())
  }, [dispatch]);
  // const grupos = useSelector((state) => state.all_groups)
  // const gruposCate = useSelector((state) => state.cate_groups)
  
  // console.log("-----");
  // console.log(allGroups);
  // console.log("-----");
  // console.log(cateGroups);
  
  return (
    <Box>
      <Box>
        <Typography>Grupos Cate</Typography>
      </Box>
      <Box>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero
          accusantium ut! Ut corrupti accusantium soluta! Delectus, explicabo
          illo harum ut, consequuntur laudantium, saepe minus nemo obcaecati
          praesentium excepturi veniam.
        </Typography>
        <Box sx={{height:"30vh", width:"50vw", display:"flex"}}>
          {/* {cateGroups && (
          <Cards groups={cateGroups} />
          )} */}
        </Box>
      </Box>
      <Box>
        <button  onClick={()=>{navigate("/")}}>Volver</button>
      </Box>
    </Box>
  );
};

export default Cate;
