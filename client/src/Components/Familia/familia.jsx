import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFamiliaGroups } from "../../Redux/actions";
import Card from "../Card/card";

const Familia = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchFamiliaGroups())
  }, [dispatch]);

  const gruposFamilia = useSelector((state) => state.family_groups)

  return (
    <Box>
      <Box>
        <Typography variant="h2">Grupos Familia Cate</Typography>
      </Box>
      <Box>
        <Typography variant="body1" >Aquí queremos recordar a todos los grupos que pasaron en algún momento por nuestra historia, gente que fue protagonista de esta logura.
          La Cate es una gran familia y no sería nada sin todas estos grupos, que con sus delegados y patrulleros formaron la Cate, siempre con la intención de llevar el mensaje y esta forma de vida en la Fe que compartimos todos.
        </Typography>
      </Box>
      <Box sx={{ gap: 1, boxShadow: 1, padding: 0.5 }}>
        
        <Typography variant="h3">Grupos ex Cate:</Typography>
        <Box display={"flex"}>
        {gruposFamilia? gruposFamilia.map(group=><Card group={group} key={group.id} />):null}
        </Box>
        </Box>
    </Box>
  );
};

export default Familia;
