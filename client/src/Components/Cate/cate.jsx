import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCateGroups } from "../../Redux/actions";
import Cards from "../Cards/cards"

const Cate = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchCateGroups());
  }, [dispatch]);

  const cateGroups = useSelector((state) => state.cate_groups)
  console.log(cateGroups);
  
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
        <Box>
          {cateGroups && (
          <Cards groups={cateGroups} />
          )}
        </Box>
      </Box>
      <Box>
        <button onClick={()=>{navigate("/")}}>Volver</button>
      </Box>
    </Box>
  );
};

export default Cate;
