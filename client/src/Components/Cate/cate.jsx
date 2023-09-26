import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Cate = () => {
  const navigate = useNavigate()
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
      </Box>
      <Box>
        <button onClick={()=>{navigate("/")}}>Volver</button>
      </Box>
    </Box>
  );
};

export default Cate;
